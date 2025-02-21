<script setup lang="ts">
const {businessName} = useCompanyInfo();

useSeoMeta({
  title: `FAQs | ${businessName}`,
  description: "",
});
</script>

<template>
  <div>
    <PageHeader heading="We're building tools that makers need" />
    <SectionFAQ/>
  </div>
</template>
