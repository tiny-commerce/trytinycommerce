<script setup lang="ts">
const appConfig = useAppConfig();

useSeoMeta({
  title: `${appConfig.businessName}`,
  description: "",
});

const { data: about } = await useAsyncData("about", () =>
  queryContent("/about").findOne()
);
const { body: features } = await queryContent("/features").findOne();
</script>

<template>
  <div>
    <PageHero />
    <PageDefinitions />
    <PageCTA />
    <PageAbout v-if="about" :about="about" />
    <PageFeatureHighlights v-if="features" :features="features" />
    <!-- <PageBlogHighlights /> -->
  </div>
</template>
