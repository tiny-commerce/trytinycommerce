<script lang="ts" setup>
const {businessName} = useCompanyInfo();
</script>

<template>
  <div class="relative isolate overflow-hidden bg-white -mt-20 z-0">
    <svg
      aria-hidden="true"
      class="absolute inset-0 -z-10 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
    >
      <defs>
        <pattern
          id="0787a7c5-978c-4f66-83c7-11c213f99cb7" height="200" patternUnits="userSpaceOnUse" width="200" x="50%"
          y="-1"
        >
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <rect fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" height="100%" stroke-width="0" width="100%" />
    </svg>

    <PageContainer class="pb-16 pt-10 sm:pb-32 lg:flex lg:pt-40 lg:pb-24">
      <div class="mx-auto max-w-2xl lg:mx-0 lg:shrink-0 lg:pt-8">
        <div class="mt-24 sm:mt-32 lg:mt-16 mb-6">
          <a
            class="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm/6 font-semibold text-primary ring-1 ring-inset ring-primary/10"
            href="#cta"
          > {{ businessName }} is coming soon | Get notified </a>
        </div>
        <UiHeading color="primary" level="h1" size="lg">
          The <span class="text-tiny pr-4">tiny</span> commerce platform built for <span class="text-tiny -ml-1">artisans</span>
        </UiHeading>

        <p class="mt-8 text-pretty text-lg text-gray-500 sm:text-xl/8">
          There are plenty of commerce solutions out there. Most try to be for "everyone", but TinyCommerce isn't for
          everyone. It's for those that sell what they create. <strong>TinyCommerce is built for the makers!</strong>
        </p>

        <!--        <div class="mt-10 flex items-center gap-x-6">-->
        <!--          <a href="#" class="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Get started</a>-->
        <!--          <a href="#" class="text-sm/6 font-semibold text-gray-900">Learn more <span aria-hidden="true">→</span></a>-->
        <!--        </div>-->
      </div>

      <div class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
        <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
          <div
            class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4"
          >
            <img
              alt="App screenshot" class="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10" height="1442"
              src="https://tailwindui.com/plus-assets/img/component-images/project-app-screenshot.png" width="2432"
            />
          </div>
        </div>
      </div>
    </PageContainer>
  </div>
</template>
