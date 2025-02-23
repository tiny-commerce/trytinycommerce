<script setup lang="ts">
const props = defineProps<{
  skinny?: boolean;
}>()

const widthClasses = ref('max-w-2xl md:max-w-4xl lg:max-w-7xl');

if(props.skinny) widthClasses.value = 'max-w-xl md:max-w-3xl'
</script>

<template>
  <div :class="`mx-auto px-4 sm:px-6 lg:px-8 ${widthClasses}`">
    <slot></slot>
  </div>
</template>
