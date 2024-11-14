<script setup lang="ts">
import { Form } from "@primevue/forms";
import { reactive } from "vue";
import { useToast } from "primevue/usetoast";

const toast = useToast();

const props = defineProps<{
  fields: any;
}>();

const initialValues = reactive(props.fields);

// const resolver = ({ values }: any) => {
//   const errors = {};

//   if (!values.username) {
//     errors.username = [{ message: "Username is required." }];
//   }

//   return {
//     errors,
//   };
// };

const onFormSubmit = ({ valid }: any) => {
  if (valid) {
    toast.add({
      severity: "success",
      summary: "Form is submitted.",
      life: 3000,
    });
  }
};
</script>

<template>
  <Form
    v-slot="$form"
    :initialValues
    @submit="onFormSubmit"
    class="flex flex-col gap-4"
  >
    <slot></slot>
  </Form>
</template>
