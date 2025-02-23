<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    size?: "sm" | "md" | "lg";
  }>(),
  {
    size: "md",
  },
);

const classes = ref("h-8");

if (props.size === "sm") classes.value = "h-6";
if (props.size === "lg") classes.value = "h-10";
</script>

<template>
  <NuxtImg alt="TinyCommerce" :class="classes" src="/tinyCommerce-logo.png" />
</template>
