<script setup lang="ts">
import type { PricingTier } from "~/app.types";

defineProps<{
  tiers: PricingTier[];
}>();
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 lg:px-8 my-12">
    <div
      class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
    >
      <div
        v-for="tier in tiers"
        :key="tier.name"
        :class="[
          tier.mostPopular ? 'ring-2 ring-primary' : 'ring-1 ring-gray-200',
          'rounded-3xl p-8 xl:p-10',
        ]"
      >
        <div class="flex items-center justify-between gap-x-4">
          <h3
            :class="[
              tier.mostPopular ? 'text-primary' : 'text-gray-900',
              'text-lg/8 font-semibold',
            ]"
          >
            {{ tier.name }}
          </h3>
          <p
            v-if="tier.mostPopular"
            class="rounded-full bg-primary/10 px-2.5 py-1 text-xs/5 font-semibold text-primary"
          >
            Most popular
          </p>
        </div>

        <p class="mt-4 text-sm/6 text-gray-600">{{ tier.description }}</p>

        <p class="mt-6 text-4xl font-semibold tracking-tight text-gray-900">
          <template v-if="tier.price">
            <sup>$</sup>{{ tier.price }} <small>/ mo</small>
          </template>
          <template v-else>FREE</template>
        </p>
        <!-- <a
          :href="tier.href"
          :aria-describedby="tier.id"
          :class="[
            tier.mostPopular
              ? 'bg-primary text-white shadow-sm hover:bg-indigo-500'
              : 'text-primary ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
            'mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
          ]"
          >Buy plan</a
        > -->

        <ul
          v-if="tier.features.length"
          role="list"
          class="mt-8 space-y-3 text-sm/6 text-gray-600 xl:mt-10"
        >
          <li
            v-for="feature in tier.features"
            :key="feature.description"
            class="flex gap-x-2 items-center"
          >
            <UiIcon
              v-if="feature.icon === 'yes'"
              :icon="IconList.Check"
              aria-hidden="true"
            />
            <UiIcon
              v-if="feature.icon === 'no'"
              :icon="IconList.X"
              color="secondary"
              aria-hidden="true"
            />
            {{ feature.description }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
