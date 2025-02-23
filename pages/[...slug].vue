<script lang="ts" setup>
const {path} = useRoute();
const {data: page} = await useAsyncData(path, () => {
  return queryCollection("pages").path('/pages' + path).first();
});
if(page.value) useSeoMeta(page.value.seo);
</script>

<template>
  <ContentRenderer v-if="page" :value="page"/>
</template>
