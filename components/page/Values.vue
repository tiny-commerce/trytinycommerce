<script setup>
const valuesContent = await queryContent("/values").findOne();
const values = valuesContent.body;
</script>

<template>
  <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2
        class="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
      >
        Our values
      </h2>
      <p class="mt-6 text-lg/8 text-gray-600">
        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
        voluptatum cupiditate veritatis in accusamus quisquam.
      </p>
    </div>
    <dl
      class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
    >
      <div v-for="value in values" :key="value.name">
        <dt class="font-semibold text-gray-900">{{ value.name }}</dt>
        <dd class="mt-1 text-gray-600">{{ value.description }}</dd>
      </div>
    </dl>
  </div>
</template>
