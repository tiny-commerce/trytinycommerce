<template>
  <div class="bg-surface-800">
    <div class="px-6 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div class="mx-auto max-w-4xl text-center">
        <h2
          class="text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl"
        >
          MakerBiz Coming Soon
        </h2>
        <p
          class="mx-auto mt-6 max-w-3xl text-pretty text-lg/8 text-surface-200"
        >
          We're working day and night to put the finishing touches on MakerBiz.
          In the meantime enter your email address below to be on the short list
          of makers who'll be invited to our launch.
        </p>
        <div class="mt-12 flex gap-x-2">
          <label class="sr-only">Email address</label>
          <UiInput
            type="email"
            placeholder="Enter your email address"
            autocomplete="email"
          />
          <UiButton label="Subscribe" type="submit" class="shrink-0" />
        </div>
      </div>
    </div>
  </div>
</template>
