<script lang="ts" setup>
const props = defineProps<{
  featureSlug: String;
  firstSlug: String;
  secondSlug: String;
}>()

const {data: featuredPost} = await useAsyncData(String(props.featureSlug), () => {
  return queryCollection("posts").path('/posts/' + props.featureSlug).first();
});

const {data: firstPost} = await useAsyncData(String(props.firstSlug), () => {
  return queryCollection("posts").path('/posts/' + props.firstSlug).first();
});

const {data: secondPost} = await useAsyncData(String(props.secondSlug), () => {
  return queryCollection("posts").path('/posts/' + props.secondSlug).first();
});

const posts = [
  firstPost.value,
  secondPost.value
]
</script>

<template>
  <div
    class="mx-auto py-16 grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8"
  >
    <article v-if="featuredPost" class="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg group">
      <a :href="featuredPost.path">
      <p  class="block text-sm/6 text-gray-600">{{ featuredPost.date }}</p>
      <h2 class="mt-4 text-pretty text-3xl font-semibold tracking-tight text-primary group-hover:text-secondary sm:text-4xl">
        {{ featuredPost.title }}
      </h2>
      <div class="mt-4 text-lg/8 text-gray-600">
        <ContentRenderer v-if="featuredPost.meta.excerpt" :value="featuredPost.meta.excerpt"/>
      </div>
<!--      <div class="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">-->
<!--        <div class="flex lg:border-t lg:border-gray-900/10 lg:pt-8">-->
<!--          <img :src="" alt="Josh Evensen" class="size-6 flex-none rounded-full bg-gray-50"/> -->
<!--          Josh Evensen-->
<!--        </div>-->
<!--      </div>-->
      </a>
    </article>
    <div
      class="mx-auto w-full max-w-2xl border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0"
    >
      <div class="-my-12 divide-y divide-gray-900/10">
        <article v-for="post in posts" :key="post.id" class="py-12">
          <div class="group relative max-w-xl">
            <a :href="post.path">
            <p  class="block text-sm/6 text-gray-600" >{{ post.date }}</p>

            <h2 class="mt-2 text-lg font-semibold text-primary group-hover:text-secondary">
                {{ post.title }}
            </h2>

            <div class="mt-4 text-sm/6 text-gray-600">
              <ContentRenderer v-if="post.meta.excerpt" :value="post.meta.excerpt"/>
            </div>
            </a>
          </div>
<!--          <div class="mt-4 flex"> -->
<!--            <img src="" alt="Josh Evensen" class="size-6 flex-none rounded-full bg-gray-50"/> -->
<!--            Josh Evensen-->
<!--          </div>-->
        </article>
      </div>
    </div>
  </div>
</template>
