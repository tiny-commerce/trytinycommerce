<script setup lang="ts">
const {businessName} = useCompanyInfo();

useSeoMeta({
  title: `Blog | ${businessName}`,
  description: "",
});
</script>

<template>
  <PageHeader eyebrow="Blog" heading="Thoughts about crafting and business" />
  <BlogList />
</template>
