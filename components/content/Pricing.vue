<script setup>
const {data:features} = await useAsyncData('features', () => $fetch('/api/list/features'));
</script>

<template>
  <ClientOnly>
    <LayoutContainer>
      <div class="mx-auto max-w-2xl rounded-3xl ring-1 ring-surface-200 lg:mx-0 lg:flex lg:max-w-none">
        <div class="p-8 sm:p-10 lg:flex-auto">
          <h3 class="text-3xl font-semibold tracking-tight text-surface-700">
            <slot name="heading"/>
          </h3>
          <p class="mt-2 text-base/7 text-surface-600">
            <slot name="description"/>
          </p>

          <div class="mt-4 flex items-center gap-x-4">
            <h4 class="flex-none text-md/6 font-semibold text-primary">What’s included</h4>
            <div class="h-px flex-auto bg-surface-100" />
          </div>

          <ul class="mt-6 grid grid-cols-1 gap-4 text-sm/6 text-surface-600 sm:grid-cols-2" role="list">
            <li v-for="feature in features" :key="feature" class="flex gap-x-3">
              <UiIcon :icon="IconList.Check" class="mt-1 text-secondary" />
              {{ feature.name }}
            </li>
            <li class="flex gap-x-3 sm:col-span-2">
              <UiIcon :icon="IconList.Check" class="mt-1 text-secondary" />
              <slot name="bottomFeature"/>
            </li>
          </ul>
        </div>

        <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0">
          <div
            class="h-full rounded-2xl bg-surface-100 py-10 text-center ring-1 ring-inset ring-surface-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16"
          >
            <div class="mx-auto max-w-sm px-8">
              <p class="flex items-baseline justify-center gap-x-2">
              <span class="text-9xl font-semibold tracking-tight text-surface-900">
                <slot name="price"/>
              </span>
                <span class="text-4xl/6 font-semibold tracking-wide text-surface-600">/mo</span>
              </p>
              <p class="my-3 text-xl text-surface-500">and</p>
              <div class="text-surface-600 space-y-1">
                <p class="text-4xl">
                  <slot name="transactionPrice"/>
                </p>
                <p class="text-xl">per successful charge for domestic cards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutContainer>
  </ClientOnly>
</template>
