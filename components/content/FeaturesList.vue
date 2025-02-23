<script setup>

const {data: features} = await useAsyncData("features", () => {
  return queryCollection("features").all();
});

const coreFeatures = [
  {
    "icon":        "mobile",
    "name":        "eCommerce Website",
    "description": "Use your own domain or ours. Your online space where you showcase your work, connect with your fans, and sell your products.",
  },
  {
    "icon":        "users",
    "name":        "Simple CRM",
    "description": "Keep your fans happy, respond to their needs, and building a loyal community around your work.",
  },
  {
    "icon":        "desktop",
    "name":        "Customer Portal",
    "description": "",
  },
  {
    "icon":        "calculator",
    "name":        "Inventory Management",
    "description": "Make sure you've got what you need, and stay on top of stock so you always have stock to sell to your fans.",
  },
  {
    "icon":        "barcode",
    "name":        "Product Variants, Collections, and Groups",
    "description": "",
  },
  {
    "icon":        "calendar",
    "name":        "Schedule Events",
    "description": "Keep track show dates and plan ahead so you can showcase your work and connect with fans.",
  },
  {
    "icon":        "percentage",
    "name":        "Discount Codes",
    "description": "Discount codes are a fun way to offer your loyal fans with special deals.",
  },
  {
    "icon":        "shop",
    "name":        "Local Store Management",
    "description": "Make sure your products stay stocked, orders get fulfilled, and everything runs smoothly across all the stores that carry your work.",
  },
  {
    "icon":        "receipt",
    "name":        "Wholesale Invoicing",
    "description": "",
  },
  {
    "icon":        "chart-bar",
    "name":        "Reporting and Analytics",
    "description": "",
  },
];

</script>

<template>
  <LayoutContainer>
    <div class="mx-auto max-w-2xl lg:text-center">
      <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
        Core Features </p>
      <p class="mt-6 text-lg/8 text-gray-600">
        We believe in giving users exactly what they need and none of the fluff. These are the core features that every
        artisan needs.</p>
    </div>

    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        <div v-for="feature in features" :key="feature.name" class="relative pl-16">
          <dt class="text-base/7 font-semibold text-gray-900">
            <div class="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-primary">
              <UiIcon :icon="feature.icon" class="text-white" />
            </div>
            {{ feature.name }}
          </dt>
          <dd class="mt-2 text-base/7 text-gray-600">{{ feature.description }}</dd>
        </div>
      </dl>
    </div>
  </LayoutContainer>
</template>
