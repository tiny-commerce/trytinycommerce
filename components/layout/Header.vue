<script setup>
import {ref} from "vue";
import {Dialog, DialogPanel} from "@headlessui/vue";

const {headerNavigation, mobileNavigation} = useMenu();

const mobileMenuOpen = ref(false);
</script>

<template>
  <header class="relative z-30">
    <LayoutContainer class="h-16 flex items-center justify-between gap-x-6 bg-white/50">
      <div class="md:flex-1">
        <NuxtLink href="/">
          <Logo size="sm" />
        </NuxtLink>
      </div>

      <nav aria-label="Global" class="hidden md:flex md:gap-x-8">
        <UiLink
          v-for="link in headerNavigation" :key="link.label" :label="link.label" :to="link.to"
        />
      </nav>

      <!--      <div class="flex flex-1 items-center justify-end gap-x-6">-->
      <!--        <a href="#" class="hidden text-sm/6 font-semibold text-surface-900 md:block">Log in</a>-->
      <!--        <a href="#" class="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Sign up</a>-->
      <!--      </div>-->

      <div class="flex md:hidden">
        <UiButton :icon="IconList.Menu" variant="text" @click="mobileMenuOpen = true" />
      </div>
    </LayoutContainer>

    <Dialog :open="mobileMenuOpen" class="md:hidden" @close="mobileMenuOpen = false">
      <DialogPanel
        class="fixed z-50 inset-y-0 right-0 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-surface-900/10"
      >
        <div class="flex items-center justify-between gap-x-6">
          <NuxtLink href="/">
            <Logo size="sm" />
          </NuxtLink>

          <button class="-m-2.5 rounded-md p-2.5 text-surface-700" type="button" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <UiIcon :icon="IconList.X" />
          </button>
        </div>

        <div class="divide-y divide-surface-300">
          <div class="space-y-2 py-6">
            <UiLink
              v-for="link in mobileNavigation" :key="link.label" :label="link.label" :to="link.to"
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
