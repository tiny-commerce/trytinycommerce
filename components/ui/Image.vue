<script setup lang="ts">
import Image from "primevue/image";

withDefaults(
  defineProps<{
    src: string;
    alt: string;
    width: number;
    preview?: boolean;
  }>(),
  {
    preview: false,
  }
);
</script>

<template>
  <Image :src="src" :alt="alt" :width="width" :preview="preview" />
</template>
