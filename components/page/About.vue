<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content";

defineProps<{
  about: ParsedContent;
}>();
</script>

<template>
  <LayoutContainer>
    <div class="prose-xl max-w-none pb-8 px-2 md:px-12 lg:px-20">
      <ContentRenderer :value="about"></ContentRenderer>
    </div>
  </LayoutContainer>
</template>
