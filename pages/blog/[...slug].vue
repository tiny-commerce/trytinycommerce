<script lang="ts" setup>
const {businessName} = useCompanyInfo();

useSeoMeta({
             title:       `Post | ${businessName}`,
             description: "",
           });
</script>

<template>
  <main>
    <ContentDoc />
  </main>
</template>
