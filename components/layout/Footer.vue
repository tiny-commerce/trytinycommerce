<script lang="ts" setup>
const {startYear, businessName} = useCompanyInfo();
const {footerNavigation} = useMenu();

const currentYear = new Date().getFullYear();
let copyrightYear = currentYear;

if (currentYear > startYear) {
  copyrightYear = `${startYear}-${currentYear}`;
}
</script>

<template>
  <SectionCTA />

  <footer class="pt-4 pb-8">
    <PageContainer>
      <NuxtLink class="flex justify-center" to="/">
        <Logo />
      </NuxtLink>

      <nav aria-label="Footer" class="mt-8 mb-4 flex flex-wrap justify-center gap-x-8">
        <UiLink v-for="link in footerNavigation" :key="link.label" :label="link.label" :to="link.to" />
      </nav>

      <p class="text-center text-sm/6 text-surface-500">
        &copy; {{ copyrightYear }} {{ businessName }}, LLC. All rights reserved. |
        <NuxtLink to="/privacy">Privacy Policy</NuxtLink>
      </p>
    </PageContainer>
  </footer>
</template>
