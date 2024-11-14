<script setup></script>

<template>
  <form action="#" method="POST" class="mx-auto my-16 max-w-xl sm:my-20">
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
          <a href="/privacy" class="font-semibold text-primary"
            >privacy&nbsp;policy</a
          >.
        </p>
      </div>
    </div>
    <div class="mt-10">
      <UiButton label="Let's talk" type="submit" full-width />
    </div>
  </form>
</template>
