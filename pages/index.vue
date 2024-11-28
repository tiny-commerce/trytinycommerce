<script setup lang="ts">
const appConfig = useAppConfig();

useSeoMeta({
  title: `${appConfig.businessName}`,
  description: "",
});
</script>

<template>
  <div>
    <PageHero />
    <PageCTA />
    <PageFeatureHighlights />
    <!-- <PageBlogHighlights /> -->
  </div>
</template>
