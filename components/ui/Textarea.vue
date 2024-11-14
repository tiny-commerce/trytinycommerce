<script setup lang="ts">
import Textarea from "primevue/textarea";

const model = defineModel();
</script>

<template>
  <Textarea :model="model" autoResize rows="5" fluid />
</template>
