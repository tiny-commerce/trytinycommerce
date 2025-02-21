<script setup lang="ts">
const {businessName} = useCompanyInfo();

useSeoMeta({
  title: `Contact | ${businessName}`,
  description: "",
});
</script>

<template>
  <div>
    <PageHeader heading="Contact Us" />
    <FormContact />
  </div>
</template>
