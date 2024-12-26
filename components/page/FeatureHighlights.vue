<script setup lang="ts">
defineProps<{
  features: any;
}>();
</script>

<template>
  <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 my-16">
    <div class="mb-8 text-center">
      <UiHeading size="md">How We'll Take Care of Business</UiHeading>
    </div>

    <div v-if="features.length" class="grid grid-cols-1 gap-6 lg:grid-cols-6">
      <PageFeatureHighlightsItem
        v-for="feature in features"
        :key="feature.name"
        :icon="feature.icon"
        :tag="feature.name"
        heading="Take care of products"
        :width="feature.width"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida
          justo et nulla efficitur, maximus egestas sem pellentesque.
        </p>
      </PageFeatureHighlightsItem>
    </div>
  </div>
</template>
