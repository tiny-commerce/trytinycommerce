<script lang="ts" setup>
import Image from "primevue/image";

withDefaults(
  defineProps<{
    src: string;
    alt: string;
    width: number;
    height?: number;
    preview?: boolean;
  }>(),
  {
    preview: false,
  },
);
</script>

<template>
  <Image
    :alt="alt" :height="height" :preview="preview" :src="src" :width="width"
  />
</template>
