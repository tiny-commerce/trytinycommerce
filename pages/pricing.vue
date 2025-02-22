<script lang="ts" setup>
const {businessName} = useCompanyInfo();

useSeoMeta({
             title:       `Pricing | ${businessName}`,
             description: "",
           });
</script>

<template>
  <PageHeader eyebrow="Pricing" heading="Pricing that grows with you">
    We're still working on our pricing structure so let us know what you think.
    <NuxtLink class="font-semibold text-primary hover:underline" to="/contact">Contact Us</NuxtLink>
  </PageHeader>
  <SectionPricing />
</template>
