<script lang="ts" setup>
defineProps<{
  imageSrc: string
}>()

const {data:benefits} = await useAsyncData('benefits', () => $fetch('/api/list/benefits'));
</script>

<template>
  <ClientOnly>
    <div class="overflow-hidden bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          <div class="lg:pr-8 lg:pt-4">
            <div class="lg:max-w-lg">
              <p class="mt-2 text-pretty text-2xl font-semibold tracking-tight text-surface-900 sm:text-4xl">
                <slot name="heading"/>
              </p>

              <p class="mt-6 text-lg/8 text-surface-600">
                <slot/>
              </p>

              <dl class="mt-10 max-w-xl space-y-8 text-base/7 text-surface-600 lg:max-w-none">
                <div v-for="benefit in benefits" :key="benefit.name" class="relative pl-9">
                  <dt class="inline font-semibold text-surface-900">
                    <UiIcon :icon="benefit.icon" class="absolute left-1 top-1 size-5 text-primary"/>
                    {{ benefit.name }}
                  </dt>
                  {{ " " }}
                  <dd class="inline">{{ benefit.description }}</dd>
                </div>
              </dl>
            </div>
          </div>

          <div
            class="rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl w-[48rem] max-w-none sm:w-[57rem] md:-ml-4 lg:-ml-0"
          >
          <NuxtImg
            alt="Product screenshot"
            class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-surface-400/10"
            :src="imageSrc"
            :width="2432"
          />
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
