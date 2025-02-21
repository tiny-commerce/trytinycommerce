<script setup lang="ts">
import Message from "primevue/message";

defineProps<{
  label?: string;
  error?: string | string[];
}>();
</script>

<template>
  <div class="flex flex-col">
    <label v-if="label" class="mb-1">{{ label }}</label>
    <slot></slot>

    <Message v-if="error" severity="error" size="small" variant="simple" class="mt-1">
      {{ error }}
    </Message>
  </div>
</template>
