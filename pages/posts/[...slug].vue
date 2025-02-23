<script lang="ts" setup>
const route = useRoute();

const {data: post, refresh} = await useAsyncData(route.path, () => {
  return queryCollection("posts").path(route.fullPath).first();
});

console.log('post', post.value)

watch(() => route.path, () => {
  refresh();
})

if(post.value) useSeoMeta(post.value.seo);

const date = computed(() => {
  return new Date(post.value ? post.value.date : 'now').toLocaleDateString('en-us', {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
})

</script>

<template>
  <ClientOnly>
    <template v-if="post">
      <ContentHeader>
        {{post.title}}
        <template #subheading>Written on {{ date }}</template>
      </ContentHeader>

      <LayoutContainer skinny>
        <div class="prose prose-slate max-w-none">
          <ContentRenderer :value="post"/>
        </div>
      </LayoutContainer>

      <LayoutContainer>
          <div class="flex justify-center items-center mt-14 pt-6 border-t">
            <UiLink to="/blog" label="Back to Blog"/>
          </div>
      </LayoutContainer>
    </template>
  </ClientOnly>
</template>
