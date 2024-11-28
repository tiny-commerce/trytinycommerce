<script setup lang="ts">
defineProps<{
  heading: string;
  subheading?: string;
  description?: string;
  eyebrow?: string;
}>();
</script>

<template>
  <div class="px-6 pt-12 mb-12 sm:pt-16 sm:mb-16 lg:px-8">
    <div class="mx-auto max-w-5xl text-center">
      <p v-if="eyebrow" class="mb-2 text-base/7 font-semibold text-primary">
        {{ eyebrow }}
      </p>

      <UiHeading level="h1" size="xl" color="primary" class="text-8xl">
        {{ heading }}
      </UiHeading>

      <UiHeading v-if="subheading" color="light" class="mt-2 text-7xl">
        {{ subheading }}
      </UiHeading>

      <p
        v-if="description"
        class="max-w-3xl mt-12 mx-auto text-pretty font-medium text-xl/9 sm:text-2xl/9"
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
