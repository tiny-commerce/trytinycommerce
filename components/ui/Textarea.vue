<script lang="ts" setup>
import Textarea from "primevue/textarea";

const model = defineModel();
</script>

<template>
  <Textarea :model="model" autoResize fluid rows="5" />
</template>
