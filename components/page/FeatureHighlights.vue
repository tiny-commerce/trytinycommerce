<script setup lang="ts">
defineProps<{
  features: any;
}>();
</script>

<template>
  <div class="bg-gray-200 py-20">
    <LayoutContainer>
      <div class="mb-14 text-center">
        <UiHeading size="md">How We'll Take Care of Business</UiHeading>
      </div>

      <div
        v-if="features.length"
        class="grid grid-cols-1 gap-8 lg:grid-cols-6 mx-auto md:max-w-xl lg:max-w-none"
      >
        <PageFeatureHighlightsItem
          v-for="feature in features"
          :key="feature.name"
          :icon="feature.icon"
          :tag="feature.name"
          :heading="feature.heading"
          :width="feature.width"
        >
          <p>{{ feature.description }}</p>
        </PageFeatureHighlightsItem>
      </div>
    </LayoutContainer>
  </div>
</template>
