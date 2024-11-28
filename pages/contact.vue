<script setup lang="ts">
const appConfig = useAppConfig();

useSeoMeta({
  title: `Contact | ${appConfig.businessName}`,
  description: "",
  robots: appConfig.fullSite ? "index, follow" : "noindex, nofollow",
});
</script>

<template>
  <div>
    <PageHeader heading="Contact Us" />
    <PageContact />
  </div>
</template>
