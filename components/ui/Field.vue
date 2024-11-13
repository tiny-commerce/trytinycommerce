<script setup lang="ts">
import Message from "primevue/message";

const errorMessage = "";
</script>

<template>
  <div class="flex flex-col gap-1">
    <InputText name="email" type="text" placeholder="Email" />
    <Message severity="error" size="small" variant="simple">{{
      errorMessage
    }}</Message>
  </div>
</template>
