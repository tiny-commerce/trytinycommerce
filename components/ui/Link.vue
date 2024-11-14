<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string;
    to: string;
    external?: boolean;
    button?: boolean;
  }>(),
  {
    external: false,
    button: false,
  }
);

const classes = "text-sm/6 text-gray-700 hover:text-primary";
</script>

<template>
  <Button v-if="external && button" as="link" :to="to" :label="label" small />
  <a v-else-if="external" :href="to" :class="classes">{{ label }}</a>
  <NuxtLink v-else :to="to" :class="classes">{{ label }}</NuxtLink>
</template>
