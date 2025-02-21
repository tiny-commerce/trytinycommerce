<script setup lang="ts">
import "primeicons/primeicons.css";

useHead({
  htmlAttrs: {
    class: 'h-full'
  },
  bodyAttrs: {
    class: 'h-full font-sans text-surface-600'
  }
});
</script>

<template>
  <LayoutHeader />
    <NuxtPage />
  <LayoutFooter/>
</template>
