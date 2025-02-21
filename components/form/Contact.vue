<script setup lang="ts">
const fields = {
  firstName: "",
  lastName: "",
  emailAddress: "",
  message: "",
};
</script>

<template>
  <UiForm :fields="fields" class="mx-auto my-8 max-w-2xl sm:my-12">
    <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <UiField label="First Name">
        <UiInput />
      </UiField>
      <UiField label="Last Name">
        <UiInput />
      </UiField>
      <div class="sm:col-span-2">
        <UiField label="Email Address">
          <UiInput />
        </UiField>
      </div>
      <div class="sm:col-span-2">
        <UiField label="Message">
          <UiTextarea />
        </UiField>
      </div>
      <div class="sm:col-span-2">
        <p>
          By submitting this form you agree to our
          {{ " " }}
          <a href="/privacy" class="font-semibold text-primary">privacy policy</a>.
        </p>
      </div>
    </div>
    <div class="mt-10">
      <UiButton label="Send Message" type="submit" fullWidth />
    </div>
  </UiForm>
</template>
