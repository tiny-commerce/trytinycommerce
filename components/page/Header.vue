<script setup lang="ts">
defineProps<{
  heading: string;
  subheading?: string;
  description?: string;
  eyebrow?: string;
}>();

const slots = useSlots();
</script>

<template>
  <div class="px-6 lg:px-8 pt-4 pb-12 sm:py-16">
    <div class="mx-auto max-w-5xl text-center">
      <p v-if="eyebrow" class="mb-8 text-xl uppercase text-surface-500 tracking-wide">
        {{ eyebrow }}
      </p>

      <UiHeading level="h1" size="lg" color="primary">
        {{ heading }}
      </UiHeading>

      <UiHeading v-if="subheading" size="sm" color="light" class="mt-8 md:mt-2">
        {{ subheading }}
      </UiHeading>

      <p v-if="slots.default" class="max-w-4xl mt-4 mx-auto text-pretty font-medium text-xl/9 sm:text-2xl/9">
        <slot />
      </p>
    </div>
  </div>
</template>
