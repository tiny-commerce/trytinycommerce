<script lang="ts" setup>
const {businessName} = useCompanyInfo();

useSeoMeta({
             title:       `FAQ | ${businessName}`,
             description: "",
           });
</script>

<template>
  <PageHeader eyebrow="FAQ" heading="You've got questions. We have answers.">
    Have a different question and can’t find the answer you’re looking for?
    <NuxtLink class="font-semibold text-primary hover:underline" to="/contact">Contact Us</NuxtLink>
  </PageHeader>

  <SectionFAQ />
</template>
