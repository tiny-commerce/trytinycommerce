<script lang="ts" setup>
const fields = {
  firstName:    "",
  lastName:     "",
  emailAddress: "",
  message:      "",
};
</script>

<template>
  <LayoutContainer skinny>
  <UiForm :fields="fields" class="my-8 sm:my-12">
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
          By submitting this form you agree to our {{ " " }} <a class="font-semibold text-primary" href="/privacy">privacy
          policy</a>. </p>
      </div>
    </div>
    <div class="mt-10">
      <UiButton fullWidth label="Send Message" type="submit" />
    </div>
  </UiForm>
  </LayoutContainer>
</template>
