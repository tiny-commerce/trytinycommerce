<script setup lang="ts">
const {businessName} = useCompanyInfo();

useSeoMeta({
  title: `Privacy Policy | ${businessName}`,
  description: "",
});

const { data: page } = await useAsyncData(
  "privacy",
  queryContent("/privacy").findOne
);

const heading = page.value?.title ? page.value.title : "Privacy";
const lastUpdated = page.value?.lastUpdated ? page.value.lastUpdated : 'Jan 1st, 2025';
</script>

<template>
  <div>
    <PageHeader
      :heading="heading"
      :description="`Our Privacy Policy was last updated on ${lastUpdated}`"
    />
    <div class="prose prose-slate max-w-3xl mx-auto">
      <ContentDoc />
    </div>
  </div>
</template>
