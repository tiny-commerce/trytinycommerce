<script setup lang="ts">
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

let headingClasses = "text-balance font-heading font-bold";

if (props.size === "xl") headingClasses += " text-7xl";
if (props.size === "lg") headingClasses += " text-6xl";
if (props.size === "md") headingClasses += " text-5xl";
if (props.size === "sm") headingClasses += " text-3xl";

if (props.color === "dark") headingClasses += " text-surface-800";
if (props.color === "default") headingClasses += " text-surface-700";
if (props.color === "light") headingClasses += " text-surface-500";
if (props.color === "white") headingClasses += " text-surface-50";
if (props.color === "primary") headingClasses += " text-primary";
</script>

<template>
  <h1 v-if="level === 'h1'" :class="headingClasses"><slot></slot></h1>
  <h2 v-else-if="level === 'h2'" :class="headingClasses"><slot></slot></h2>
  <h3 v-else-if="level === 'h3'" :class="headingClasses"><slot></slot></h3>
  <h4 v-else-if="level === 'h4'" :class="headingClasses"><slot></slot></h4>
  <p v-else-if="level === 'p'" :class="headingClasses"><slot></slot></p>
</template>
