<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'

const {headerNavigation, mobileNavigation} = useMenu();

const mobileMenuOpen = ref(false)
</script>

<template>
  <header class="relative z-30">
    <PageContainer class="h-16 flex items-center justify-between gap-x-6 bg-white/50">
      <div class="lg:flex-1">
        <NuxtLink href="/">
          <Logo size="sm" />
        </NuxtLink>
      </div>

      <nav class="hidden lg:flex lg:gap-x-8" aria-label="Global">
        <UiLink
          v-for="link in headerNavigation"
          :key="link.label"
          :to="link.to"
          :label="link.label"
        />
      </nav>

<!--      <div class="flex flex-1 items-center justify-end gap-x-6">-->
<!--        <a href="#" class="hidden text-sm/6 font-semibold text-surface-900 lg:block">Log in</a>-->
<!--        <a href="#" class="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Sign up</a>-->
<!--      </div>-->

      <div class="flex lg:hidden">
        <UiButton :icon="IconList.Menu" @click="mobileMenuOpen = true" variant="text"/>
      </div>
    </PageContainer>

    <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <DialogPanel class="fixed z-50 inset-y-0 right-0 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-surface-900/10">
        <div class="flex items-center justify-between gap-x-6">
          <NuxtLink href="/">
            <Logo size="sm" />
          </NuxtLink>

          <button type="button" class="-m-2.5 rounded-md p-2.5 text-surface-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <UiIcon :icon="IconList.X" />
          </button>
        </div>

        <div class="divide-y divide-surface-300">
          <div class="space-y-2 py-6">
            <UiLink
              v-for="link in mobileNavigation"
              :key="link.label"
              :to="link.to"
              :label="link.label"
              class="block px-3 py-2"
            />
          </div>
<!--            <div class="py-6">-->
<!--              <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-surface-900 hover:bg-surface-50">Log in</a>-->
<!--            </div>-->
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>
