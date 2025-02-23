<script lang="ts" setup>
const slots = useSlots();
</script>

<template>
  <div class="px-6 lg:px-8 pt-4 pb-12 sm:py-16">
    <div class="mx-auto max-w-5xl text-center">
      <UiHeading color="primary" level="h1" size="lg">
        <slot />
      </UiHeading>

      <UiHeading v-if="slots.subheading" class="mt-2" color="light" size="xs">
        <slot name="subheading" />
      </UiHeading>

      <p v-if="slots.description" class="max-w-5xl mt-8 mx-auto text-pretty font-medium text-xl/9 sm:text-2xl/9">
        <slot name="description" />
      </p>
    </div>
  </div>
</template>
