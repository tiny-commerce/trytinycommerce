<script lang="ts" setup>
import Checkbox from "primevue/checkbox";
import {ref} from "vue";

const checked = ref(false);
</script>

<template>
  <Checkbox v-model="checked" binary />
</template>
