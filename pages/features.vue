<script lang="ts" setup>
const {businessName} = useCompanyInfo();

useSeoMeta({
  title: `Features | ${businessName}`,
  description: "",
});
</script>

<template>
  <PageHeader eyebrow="Features" heading="Meeting the needs of small business crafters."/>
  <FeatureMain/>
  <FeatureList/>
</template>
