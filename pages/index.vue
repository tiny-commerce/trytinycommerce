<script setup lang="ts">
const appConfig = useAppConfig();

useSeoMeta({
  title: `${appConfig.businessName}`,
  description: "",
});

const { body: features } = await queryContent("/features").findOne();
</script>

<template>
  <div>
    <PageHero />
    <PageCTA />
    <PageFeatureHighlights :features="features" />
    <!-- <PageBlogHighlights /> -->
  </div>
</template>
