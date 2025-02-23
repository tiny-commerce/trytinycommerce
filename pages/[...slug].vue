<script lang="ts" setup>
const route = useRoute();

const {data: page, refresh} = await useAsyncData(route.path, () => {
  return queryCollection("pages").path('/pages' + route.path).first();
});

watch(() => route.path, () => {
  refresh();
})

if(page.value) useSeoMeta(page.value.seo);
</script>

<template>
  <ContentRenderer v-if="page" :value="page"/>
</template>
