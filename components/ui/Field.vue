<script setup lang="ts">
import Message from "primevue/message";

defineProps<{
  label: string;
  error?: string | string[];
}>();
</script>

<template>
  <div class="flex flex-col gap-1">
    <label>{{ label }}</label>
    <slot></slot>
    <Message v-if="error" severity="error" size="small" variant="simple">
      {{ error }}
    </Message>
  </div>
</template>
