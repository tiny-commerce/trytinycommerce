<script setup lang="ts">
const appConfig = useAppConfig();

useSeoMeta({
  title: `Post | ${appConfig.businessName}`,
  description: "",
  robots: appConfig.fullSite ? "index, follow" : "noindex, nofollow",
});
</script>

<template>
  <main>
    <ContentDoc />
  </main>
</template>
