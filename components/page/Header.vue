<script lang="ts" setup>
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
      <p v-if="eyebrow" class="mb-4 text-2xl uppercase text-secondary tracking-wide">
        {{ eyebrow }} </p>

      <UiHeading color="primary" level="h1" size="lg">
        {{ heading }}
      </UiHeading>

      <UiHeading v-if="subheading" class="mt-2" color="light" size="sm">
        {{ subheading }}
      </UiHeading>

      <p v-if="slots.default" class="max-w-5xl mt-8 mx-auto text-pretty font-medium text-xl/9 sm:text-2xl/9">
        <slot />
      </p>
    </div>
  </div>
</template>
