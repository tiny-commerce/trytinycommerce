<script lang="ts" setup>
import InputText from "primevue/inputtext";

const model = defineModel();
</script>

<template>
  <InputText :model="model" fluid type="text" />
</template>
