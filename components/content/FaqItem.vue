<script lang="ts" setup>
import {MinusSmallIcon, PlusSmallIcon} from "@heroicons/vue/24/outline";
import {Disclosure, DisclosureButton, DisclosurePanel} from "@headlessui/vue";
</script>

<template>
  <div class="mx-auto max-w-2xl">
  <Disclosure v-slot="{ open }" as="div" class="py-6 first:pt-0 last:pb-0">
    <dt>
      <DisclosureButton class="flex w-full items-start justify-between text-left text-gray-900">
        <span class="text-xl/7 font-semibold">
          <slot/>
        </span>
        <span class="ml-6 flex h-7 items-center">
          <PlusSmallIcon v-if="!open" aria-hidden="true" class="size-6"/>
          <MinusSmallIcon v-else aria-hidden="true" class="size-6"/>
        </span>
      </DisclosureButton>
    </dt>
    <DisclosurePanel as="dd" class="mt-2 pr-12">
      <p class="text-base/7 text-gray-600">
        <slot name="answer"/>
      </p>
    </DisclosurePanel>
  </Disclosure>
  </div>
</template>
