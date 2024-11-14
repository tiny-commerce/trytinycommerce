<script setup lang="ts">
const appConfig = useAppConfig();

useSeoMeta({
  title: `Blog | ${appConfig.businessName}`,
  description: "",
});
</script>

<template>
  <div>
    <PageHeader heading="From the Blog" />
    <PageBlog />
  </div>
</template>
