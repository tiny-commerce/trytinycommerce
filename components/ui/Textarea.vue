<script setup lang="ts">
import Textarea from "primevue/textarea";
import { ref } from "vue";

const value = ref("");
</script>

<template>
  <Textarea v-model="value" autoResize rows="5" fluid />
</template>
