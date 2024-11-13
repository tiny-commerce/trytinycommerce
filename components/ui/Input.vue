<script setup lang="ts">
import InputText from "primevue/inputtext";
import { ref } from "vue";

const value = ref(null);
</script>

<template>
  <InputText type="text" v-model="value" fluid />
</template>
