<script setup lang="ts">
const {businessName} = useCompanyInfo();

useSeoMeta({
  title: `Pricing | ${businessName}`,
  description: "",
});
</script>

<template>
  <PageHeader eyebrow="Pricing" heading="Pricing that grows with you">
    Affordable plans crafted to meet your needs.
  </PageHeader>
  <SectionPricing />
</template>
