<script setup lang="ts">
interface ComponentProps {
  color?: "primary" | "white";
  size?: "sm" | "md" | "lg" | "xl";
}

const props = withDefaults(defineProps<ComponentProps>(), {
  color: "primary",
  size: "md",
});

let colorClass = ref("");

if (props.color === "primary") colorClass.value = "bg-primary";
if (props.color === "white") colorClass.value = "bg-white";

let heightClass = ref("");

if (props.size === "sm") heightClass.value = "h-8";
if (props.size === "md") heightClass.value = "h-12";
if (props.size === "lg") heightClass.value = "h-14";
if (props.size === "xl") heightClass.value = "h-16";
</script>

<template>
  <div
    :class="`hexagon flex justify-center items-center ${heightClass} ${colorClass}`"
  >
    <slot></slot>
  </div>
</template>

<style lang="css" scoped>
.hexagon {
  aspect-ratio: cos(30deg);
  clip-path: polygon(-50% 50%, 50% 100%, 150% 50%, 50% 0);
}
</style>
