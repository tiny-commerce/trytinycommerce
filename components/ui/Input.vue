<script setup lang="ts">
import InputText from "primevue/inputtext";

const model = defineModel();
</script>

<template>
  <InputText type="text" :model="model" fluid />
</template>
