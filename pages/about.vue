<script setup lang="ts">
const appConfig = useAppConfig();

useSeoMeta({
  title: `About | ${appConfig.businessName}`,
  description: "",
});
</script>

<template>
  <div>
    <PageHeader heading="We're building tools that makers need" />
    <PageMission />
    <PageLogos />
    <PageValues />
    <PageTeam />
  </div>
</template>
