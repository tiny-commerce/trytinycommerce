<script setup lang="ts">
const appConfig = useAppConfig();

useSeoMeta({
  title: `Blog | ${appConfig.businessName}`,
  description: "",
  robots: appConfig.fullSite ? "index, follow" : "noindex, nofollow",
});
</script>

<template>
  <div>
    <PageHeader heading="From the Blog" />
    <PageBlog />
  </div>
</template>
