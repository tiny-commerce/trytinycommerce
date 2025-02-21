<script setup lang="ts">
const {businessName} = useCompanyInfo();

useSeoMeta({
  title: `${businessName}`,
  description: "",
});
</script>

<template>
  <SectionHero/>
  <FeatureHighlights features="[]"/>
  <BlogHighlights/>
</template>
