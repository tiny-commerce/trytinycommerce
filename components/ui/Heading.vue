<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    level?: "h1" | "h2" | "h3" | "h4" | "p";
    size?: "xl" | "lg" | "md" | "sm";
    color?: "dark" | "default" | "light" | "white" | "primary";
  }>(),
  {
    level: "h2",
    size: "lg",
    color: "default",
  }
);

let headingClasses = ref("text-balance font-heading font-bold");

if (props.size === "xl")
  headingClasses.value += " text-6xl md:text-7xl lg:text-8xl";
if (props.size === "lg")
  headingClasses.value += " text-4xl md:text-5xl lg:text-6xl";
if (props.size === "md")
  headingClasses.value += " text-3xl md:text-4xl lg:text-5xl";
if (props.size === "sm")
  headingClasses.value += " text-xl md:text-2xl lg:text-3xl";

if (props.color === "dark") headingClasses.value += " text-surface-800";
if (props.color === "default") headingClasses.value += " text-surface-700";
if (props.color === "light") headingClasses.value += " text-surface-500";
if (props.color === "white") headingClasses.value += " text-surface-50";
if (props.color === "primary") headingClasses.value += " text-primary";
</script>

<template>
  <h1 v-if="level === 'h1'" :class="headingClasses">
    <slot></slot>
  </h1>
  <h2 v-else-if="level === 'h2'" :class="headingClasses">
    <slot></slot>
  </h2>
  <h3 v-else-if="level === 'h3'" :class="headingClasses">
    <slot></slot>
  </h3>
  <h4 v-else-if="level === 'h4'" :class="headingClasses">
    <slot></slot>
  </h4>
  <p v-else-if="level === 'p'" :class="headingClasses">
    <slot></slot>
  </p>
</template>
