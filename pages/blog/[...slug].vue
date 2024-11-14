<script setup lang="ts">
const appConfig = useAppConfig();

useSeoMeta({
  title: `Post | ${appConfig.businessName}`,
  description: "",
});
</script>

<template>
  <main>
    <ContentDoc />
  </main>
</template>
