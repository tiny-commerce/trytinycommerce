<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    mode?: "light" | "dark";
  }>(),
  {
    mode: "light",
  }
);

const bizColor =
  props.mode === "light" ? "text-surface-600" : "text-surface-100";
</script>

<template>
  <p class="inline text-6xl font-bold font-logo">
    <!-- Don't fix this, it has to look like this for spacing -->
    <span class="text-primary">
      M<small class="uppercase text-[70%]">aker</small></span
    ><span :class="bizColor"
      >B<small class="uppercase text-[70%]">iz</small></span
    >
  </p>
</template>
