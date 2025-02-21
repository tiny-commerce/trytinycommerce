<script setup lang="ts">
defineProps<{
  heading: string;
  subheading?: string;
  description?: string;
  eyebrow?: string;
}>();
</script>

<template>
  <div class="px-6 lg:px-8 pt-4 pb-12 sm:py-16">
    <div class="mx-auto max-w-5xl text-center">
      <p v-if="eyebrow" class="mb-2 text-base/7 font-semibold text-primary">
        {{ eyebrow }}
      </p>

      <UiHeading level="h1" size="lg" color="primary">
        {{ heading }}
      </UiHeading>

      <UiHeading v-if="subheading" size="md" color="light" class="mt-8 md:mt-2">
        {{ subheading }}
      </UiHeading>

      <p
        v-if="description"
        class="max-w-3xl mt-12 mx-auto text-pretty font-medium text-xl/9 sm:text-2xl/9"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>
