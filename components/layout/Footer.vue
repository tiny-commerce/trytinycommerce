<script setup>
const appConfig = useAppConfig();

const currentYear = new Date().getFullYear();
const startYear = appConfig.startYear;
let copyrightYear = currentYear;

if (currentYear > startYear) {
  copyrightYear = `${startYear}-${currentYear}`;
}
</script>

<template>
  <div class="mt-16">
    <PageCTA />
    <footer>
      <div
        class="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8"
      >
        <nav
          class="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6"
          aria-label="Footer"
        >
          <UiLink
            v-for="item in appConfig.navigation.all"
            :key="item.name"
            :to="item.href"
            :label="item.name"
          />
        </nav>
        <p class="mt-10 text-center text-sm/6 text-gray-600">
          &copy; {{ copyrightYear }} {{ appConfig.businessName }}. All rights
          reserved.
          <UiLink
            v-for="item in appConfig.navigation.legal"
            :key="item.name"
            :to="item.href"
            :label="item.name"
          />
        </p>
      </div>
    </footer>
  </div>
</template>
