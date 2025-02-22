<script lang="ts" setup>
const {businessName} = useCompanyInfo();

useSeoMeta({
             title:       `Blog | ${businessName}`,
             description: "",
           });
</script>

<template>
  <PageHeader eyebrow="Blog" heading="Our thoughts on crafting and business" />
  <BlogList />
</template>
