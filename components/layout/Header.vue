<script setup>
const appConfig = useAppConfig();
</script>

<template>
  <header>
    <nav
      v-if="appConfig.fullSite"
      class="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
      aria-label="Global"
    >
      <!-- Logo -->
      <div class="flex lg:flex-1">
        <NuxtLink to="/" class="-m-1.5 p-1.5">
          <Logo />
        </NuxtLink>
      </div>

      <!-- Main Nav -->
      <div class="hidden lg:flex lg:gap-x-12">
        <UiLink
          v-for="item in appConfig.navigation.main"
          :key="item.name"
          :to="item.href"
          :label="item.name"
        />
      </div>

      <!-- Auth Links -->
      <div
        v-if="appConfig.loginLink || appConfig.signupLink"
        class="flex flex-1 items-center justify-end gap-x-6"
      >
        <UiLink
          v-if="appConfig.loginLink"
          :to="appConfig.loginLink"
          label="Log in"
          external
        />
        <UiLink
          v-if="appConfig.signupLink"
          :to="appConfig.signupLink"
          label="Sign up"
          external
          button
        />
      </div>

      <!-- <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="size-6" aria-hidden="true" />
        </button>
      </div> -->
    </nav>

    <div
      v-else
      class="flex max-w-3xl mx-auto justify-center p-6"
      aria-label="Global"
    >
      <NuxtLink to="/" class="-m-1.5 p-1.5">
        <Logo />
      </NuxtLink>
    </div>
  </header>
</template>
