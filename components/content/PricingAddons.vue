<script setup lang="ts">
const {data:addOns} = await useAsyncData('addOns', () => $fetch('/api/list/addOns'));
</script>

<template>
  <LayoutContainer>
  <div class="isolate mx-auto mt-12 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
    <div
      v-for="(addOn, index) in addOns" :key="index"
      class="p-2 flex flex-col justify-between rounded-2xl bg-white ring-1 ring-surface-200"
    >
      <div class="px-8 p-6">
        <p class="text-lg/7 font-semibold text-secondary">Add-on</p>
        <h3 class="text-surface-700 text-3xl/8 font-semibold">{{ addOn.name }}</h3>
        <p class="mt-1 text-surface-600">{{ addOn.description }}</p>
      </div>

      <div class="mt-2 rounded-2xl bg-surface-100 py-4 ring-1 ring-inset ring-surface-900/5">
        <p class="flex items-baseline justify-center gap-x-1">
          <span class="text-5xl font-semibold tracking-tight text-surface-900">${{ addOn.price }}</span> <span
          class="text-xl/6 font-semibold text-surface-600"
        >/mo</span>
        </p>
        <p v-if="addOn.additionalPricing" class="mt-2 text-center font-semibold text-surface-600">
          {{ addOn.additionalPricing }} </p>
      </div>
    </div>
  </div>
  </LayoutContainer>
</template>
