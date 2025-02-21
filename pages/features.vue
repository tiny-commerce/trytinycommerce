<script setup lang="ts">
const {businessName} = useCompanyInfo();

useSeoMeta({
  title: `Features | ${businessName}`,
  description: "",
});
</script>

<template>
  <PageHeader heading="Features"/>
  <FeatureMain/>
  <FeatureList/>
</template>
