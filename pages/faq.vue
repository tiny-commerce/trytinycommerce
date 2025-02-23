<script lang="ts" setup>
import usePageContent from "~/composables/usePageContent";

const {page} = await usePageContent('faq');
if(page.value) useSeoMeta(page.value.seo);
</script>

<template>
  <ContentRenderer v-if="page" :value="page"/>
</template>
