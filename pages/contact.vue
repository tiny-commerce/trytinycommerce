<script setup lang="ts">
const {businessName} = useCompanyInfo();

useSeoMeta({
  title: `Contact | ${businessName}`,
  description: "",
});
</script>

<template>
  <PageHeader eyebrow="Contact Us" heading="Get In Touch">
    We'd love to hear from you. Ask us questions. Give Feedback. Let us know what you need in a tiny commerce solution.
  </PageHeader>

  <FormContact />
</template>
