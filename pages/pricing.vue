<script setup lang="ts">
import type { PricingTier } from "~/app.types";

const appConfig = useAppConfig();

useSeoMeta({
  title: `Pricing | ${appConfig.businessName}`,
  description: "",
  robots: appConfig.fullSite ? "index, follow" : "noindex, nofollow",
});

const { data: pricingData } = await useAsyncData(
  "pricing",
  queryContent("/pricing").only("body").findOne
);

const tiers = computed(() =>
  pricingData.value?.body
    ? (pricingData.value.body as unknown as PricingTier[])
    : []
);
</script>

<template>
  <div>
    <PageHeader
      heading="Pricing that grows with you"
      description="Choose an affordable plan that's packed with the best features for engaging your audience, creating customer loyalty, and driving sales."
    />
    <PagePricing :tiers="tiers" />
    <PageFAQ />
  </div>
</template>
