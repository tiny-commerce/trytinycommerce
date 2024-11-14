<script setup lang="ts">
defineProps<{
  src: string;
  alt: string;
}>();
</script>

<template>
  <div
    class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4"
  >
    <div>
      <UiImage
        :src="src"
        :alt="alt"
        :width="2432"
        class="rounded-md shadow-2xl ring-1 ring-gray-900/10"
      />
    </div>
  </div>
</template>
