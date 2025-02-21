<script setup lang="ts">
</script>

<template>
  <PageContainer id="cta" class="py-16">
    <div class="bg-primary px-6 py-8 sm:px-12 xl:py-16 sm:rounded-3xl">
      <h2 class="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        Get notified when we’re launching
      </h2>
      <p class="mx-auto mt-6 max-w-lg text-center text-lg text-gray-300">
        Reprehenderit ad esse et non officia in nulla. Id proident tempor incididunt nostrud nulla et culpa.
      </p>
      <form class="flex items-center justify-between mt-10 mx-auto max-w-xl gap-x-4 p-2 bg-white rounded-lg">
        <UiField class="grow">
          <UiInput name="email" type="email" autocomplete="email" placeholder="Enter your email" />
        </UiField>
        <UiButton label="Notify Me" color="primary" variant="outlined"/>
      </form>
    </div>
  </PageContainer>
</template>
