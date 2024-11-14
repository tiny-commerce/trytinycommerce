<script setup lang="ts">
const appConfig = useAppConfig();

useSeoMeta({
  title: `Contact | ${appConfig.businessName}`,
  description: "",
});
</script>

<template>
  <div>
    <PageHeader heading="Contact Us" />
    <PageContact />
  </div>
</template>
