<script setup lang="ts">
const {businessName} = useCompanyInfo();

useSeoMeta({
  title: `FAQs | ${businessName}`,
  description: "",
});
</script>

<template>
  <PageHeader eyebrow="Frequently Asked Questions" heading="You've got questions. We have answers." >
    Have a different question and can’t find the answer you’re looking for?
    <NuxtLink to="/contact" class="font-semibold text-primary hover:underline">Contact Us</NuxtLink>?
  </PageHeader>

  <SectionFAQ/>
</template>
