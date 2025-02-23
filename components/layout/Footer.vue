<script lang="ts" setup>
const {footerNavigation} = useMenu();

const startYear = 2025;
const currentYear = new Date().getFullYear();
let copyrightYear = Number(currentYear);

if (currentYear > startYear) {
  copyrightYear = startYear-currentYear;
}

const {data: cta} = await useAsyncData('footer-cta', () => {
  return queryCollection("cta").path('/cta/coming-soon').first();
});
</script>

<template>
  <ContentRenderer v-if="cta" :value="cta"/>

  <footer class="pt-4 pb-8">
    <LayoutContainer>
      <NuxtLink class="flex justify-center" to="/">
        <Logo />
      </NuxtLink>

      <nav aria-label="Footer" class="mt-8 mb-4 flex flex-wrap justify-center gap-x-8">
        <UiLink v-for="link in footerNavigation" :key="link.label" :label="link.label" :to="link.to" />
      </nav>

      <p class="text-center text-sm/6 text-surface-500">
        &copy; {{ copyrightYear }} TinyCommerce, LLC. All rights reserved. |
        <NuxtLink to="/privacy">Privacy Policy</NuxtLink>
      </p>
    </LayoutContainer>
  </footer>
</template>
