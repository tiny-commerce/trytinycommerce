<script setup lang="ts">
defineProps<{
  heading: string;
  subheading?: string;
  description?: string;
  eyebrow?: string;
}>();
</script>

<template>
  <div class="px-6 pt-16 mb-12 sm:pt-20 sm:mb-16 lg:px-8">
    <div class="mx-auto max-w-4xl text-center">
      <p v-if="eyebrow" class="mb-2 text-base/7 font-semibold text-primary">
        {{ eyebrow }}
      </p>
      <h1
        class="text-5xl font-semibold tracking-tight text-surface-700 sm:text-7xl"
      >
        {{ heading }}
      </h1>
      <h2
        v-if="subheading"
        class="mt-2 text-4xl tracking-tight text-surface-600 sm:text-6xl"
      >
        {{ subheading }}
      </h2>
      <p
        v-if="description"
        class="max-w-3xl mt-8 mx-auto text-pretty text-lg font-medium text-gray-500 sm:text-xl/8"
      >
        {{ description }}
      </p>
      <!-- <div class="mt-6 flex items-center justify-center gap-x-6">
        <UiLink to="#" label="Get Started" button />
        <UiLink to="#" label="Learn More" :icon="IconList.ArrowLongRight" />
      </div> -->
    </div>
  </div>
</template>
