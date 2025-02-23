<script lang="ts" setup>
const {data:features} = await useAsyncData('features', () => $fetch('/api/list/features'));
</script>

<template>
  <ClientOnly>
    <LayoutContainer>
      <div class="mx-auto max-w-2xl lg:text-center">
        <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
          <slot name="heading"/>
        </p>
        <p class="mt-6 text-lg/8 text-gray-600">
          <slot/>
        </p>
      </div>

      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          <div v-for="feature in features" :key="feature.name" class="relative pl-16">
            <dt class="text-base/7 font-semibold text-gray-900">
              <div class="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-primary">
                <UiIcon :icon="feature.icon" class="text-white" />
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-2 text-base/7 text-gray-600">{{ feature.description }}</dd>
          </div>
        </dl>
      </div>
    </LayoutContainer>
  </ClientOnly>
</template>
