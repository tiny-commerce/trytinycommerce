<script lang="ts" setup>
const {businessName} = useCompanyInfo();

useSeoMeta({
  title: `${businessName}`,
  description: "",
});
</script>

<template>
  <SectionHero/>
  <FeatureHighlights/>
  <BlogHighlights/>
</template>
