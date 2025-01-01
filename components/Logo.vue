<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    size?: "sm" | "md" | "lg";
  }>(),
  {
    size: "md",
  }
);

const height = ref("80px");

if (props.size === "sm") height.value = "40px";
if (props.size === "md") height.value = "80px";
if (props.size === "lg") height.value = "120px";
</script>

<template>
  <NuxtImg src="/logo.png" alt="MakerBiz" :height="height" />
</template>
