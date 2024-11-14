<script setup lang="ts">
const appConfig = useAppConfig();

useSeoMeta({
  title: `Pricing | ${appConfig.businessName}`,
  description: "",
});
</script>

<template>
  <div>
    <PageHeader
      heading="Pricing that grows with you"
      description="Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales."
    />
    <PagePricing />
    <PageFAQ />
  </div>
</template>
