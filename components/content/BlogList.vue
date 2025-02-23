<script lang="ts" setup>
const {data:posts} = await useAsyncData('posts', () => $fetch('/api/blog/list'));
console.log('posts', posts.value);
</script>

<template>
  <LayoutContainer skinny>
    <div class="space-y-20 lg:space-y-20">
      <article
        v-for="post in posts" :key="post.id" class="relative isolate flex flex-col gap-8 lg:flex-row"
      >
        <!--          <div class="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">-->
        <!--            <img-->
        <!--              :src="post.imageUrl" alt="" class="absolute inset-0 size-full rounded-2xl bg-gray-50 object-cover"-->
        <!--            />-->
        <!--            <div-->
        <!--              class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"-->
        <!--            />-->
        <!--          </div>-->
        <div>
          <div class="flex items-center gap-x-4 text-sm">
            <p class="text-gray-500">
              {{ new Date(post.date).toLocaleDateString('en-us', {
              year: "numeric",
              month: "short",
              day: "numeric",
            }) }}
            </p>
          </div>

          <div class="group relative max-w-xl">
            <h3 class="mt-2 text-2xl font-semibold text-gray-900 group-hover:text-gray-600">
              <a :href="post.path"> <span class="absolute inset-0" /> {{ post.title }} </a>
            </h3>
            <div class="mt-3 text-gray-600">
              <ContentRenderer v-if="post.meta.excerpt" :value="post.meta.excerpt" />
            </div>
          </div>

          <!--            <div class="mt-6 flex border-t border-gray-900/5 pt-6">-->
          <!--              <div class="relative flex items-center gap-x-4">-->
          <!--                <img-->
          <!--                  :src="post.author.imageUrl" alt="" class="size-10 rounded-full bg-gray-50"-->
          <!--                />-->
          <!--                <div class="text-sm/6">-->
          <!--                  <p class="font-semibold text-gray-900">-->
          <!--                    <a :href="post.author.href"> <span class="absolute inset-0" /> {{ post.author.name }} </a>-->
          <!--                  </p>-->
          <!--                  <p class="text-gray-600">{{ post.author.role }}</p>-->
          <!--                </div>-->
          <!--              </div>-->
          <!--            </div>-->
        </div>
      </article>
    </div>
  </LayoutContainer>
</template>
