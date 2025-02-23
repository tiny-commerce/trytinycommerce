<script lang="ts" setup>
defineProps<{
  placeholderText: string;
  buttonText: string;
}>()
</script>

<template>
  <ClientOnly>
    <LayoutContainer id="cta" class="py-16">
      <div class="bg-primary px-6 py-8 sm:px-12 xl:py-16 sm:rounded-3xl">
        <p class="mb-4 text-2xl text-center text-surface-50 tracking-wide">
          <slot name="eyebrow"/>
        </p>

        <h2 class="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          <slot name="heading"/>
        </h2>
        <p class="mx-auto mt-4 max-w-xl text-center text-lg text-surface-100">
          <slot/>
        </p>
        <form class="flex items-center justify-between mt-10 mx-auto max-w-xl gap-x-4">
          <UiField class="grow">
            <UiInput :placeholder="placeholderText" autocomplete="email" name="email" type="email"/>
          </UiField>
          <UiButton :label="buttonText" color="primary" variant="outlined"/>
        </form>
      </div>
    </LayoutContainer>
  </ClientOnly>
</template>
