<script lang="ts" setup>
withDefaults(
  defineProps<{
    label: string;
    to: string;
    external?: boolean;
    button?: boolean;
  }>(),
  {
    external: false,
    button:   false,
  },
);

const classes = "font-bold text-gray-700 hover:text-primary";
</script>

<template>
  <Button v-if="external && button" :label="label" :to="to" as="link" small />
  <a v-else-if="external" :class="classes" :href="to">{{ label }}</a>
  <NuxtLink v-else :class="classes" :to="to">{{ label }}</NuxtLink>
</template>
