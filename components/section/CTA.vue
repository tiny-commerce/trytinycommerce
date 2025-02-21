<script setup lang="ts">
</script>

<template>
  <PageContainer id="cta" class="py-16 sm:py-24">
    <div class="bg-primary px-6 py-12 sm:rounded-3xl sm:px-18 xl:py-24">
      <h2 class="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        Get notified when we’re launching
      </h2>
      <p class="mx-auto mt-6 max-w-lg text-center text-lg text-gray-300">
        Reprehenderit ad esse et non officia in nulla. Id proident tempor incididunt nostrud nulla et culpa.
      </p>
      <form class="mx-auto mt-10 flex max-w-md gap-x-4">
        <UiField>
          <UiInput name="email" type="email" autocomplete="email" placeholder="Enter your email"/>
        </UiField>
        <UiButton label="Notify Me" color="primary" variant="outlined"/>
      </form>
    </div>
  </PageContainer>
</template>
