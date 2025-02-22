<script lang="ts" setup></script>

<template>
  <PageContainer id="cta" class="py-16">
    <div class="bg-primary px-6 py-8 sm:px-12 xl:py-16 sm:rounded-3xl">
      <p class="mb-4 text-2xl text-center text-surface-50 tracking-wide">
        We're still in development </p>

      <h2 class="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        Get notified when we’re launching </h2>
      <p class="mx-auto mt-4 max-w-xl text-center text-lg text-surface-100">
        Get on the List. Stay up to date on our progress. Join the beta group. Let us know what your looking for in a
        commerce platform. </p>
      <form class="flex items-center justify-between mt-10 mx-auto max-w-xl gap-x-4">
        <UiField class="grow">
          <UiInput autocomplete="email" name="email" placeholder="Enter your email" type="email" />
        </UiField>
        <UiButton color="primary" label="Notify Me" variant="outlined" />
      </form>
    </div>
  </PageContainer>
</template>
