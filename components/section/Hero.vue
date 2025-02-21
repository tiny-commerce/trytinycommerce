<script setup lang="ts">
const {businessName} = useCompanyInfo()
</script>

<template>
  <div class="relative isolate overflow-hidden bg-white -mt-20 z-0">
    <svg class="absolute inset-0 -z-10 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
      <defs>
        <pattern id="0787a7c5-978c-4f66-83c7-11c213f99cb7" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" stroke-width="0" fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
    </svg>

    <PageContainer class="pb-16 pt-10 sm:pb-32 lg:flex lg:pt-40 lg:pb-24">
      <div class="mx-auto max-w-2xl lg:mx-0 lg:shrink-0 lg:pt-8">
        <div class="mt-24 sm:mt-32 lg:mt-16 mb-6">
          <a href="#cta" class="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm/6 font-semibold text-primary ring-1 ring-inset ring-primary/10">
            {{ businessName }} is coming soon
          </a>
        </div>
        <UiHeading level="h1" size="lg" color="primary">
          The <span class="text-tiny pr-4">perfect fit</span> for your small business
        </UiHeading>

        <p class="mt-8 text-pretty text-lg text-gray-500 sm:text-xl/8">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
        </p>

<!--        <div class="mt-10 flex items-center gap-x-6">-->
<!--          <a href="#" class="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Get started</a>-->
<!--          <a href="#" class="text-sm/6 font-semibold text-gray-900">Learn more <span aria-hidden="true">→</span></a>-->
<!--        </div>-->
      </div>

      <div class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
        <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
          <div class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <img
              src="https://tailwindui.com/plus-assets/img/component-images/project-app-screenshot.png"
              alt="App screenshot"
              width="2432"
              height="1442"
              class="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
            />
          </div>
        </div>
      </div>
    </PageContainer>
  </div>
</template>
