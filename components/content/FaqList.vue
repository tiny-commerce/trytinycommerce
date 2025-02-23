<script setup>
const {data: questions} = await useAsyncData('faq', () => {
  return queryCollection("faq").all();
});

const faqs = [
  {
    question: "Do you offer a free trial?",
    answer:   "Yes.",
  },
  {
    question: "What happens to my store after the trial?",
    answer:   "It archives.",
  },
  {
    question: "What countries can I use TinyCommerce in?",
    answer:   "USA.",
  },
  {
    question: "Can I cancel my account at any time?",
    answer:   "Yes.",
  },
  {
    question: "When can I add and remove add-ons?",
    answer:   "Anytime.",
  },
  {
    question: "Is there an annual plan?",
    answer:   "No.",
  },
  {
    question: "Is there a setup fee?",
    answer:   "No.",
  },
  {
    question: "Do I need an SSL certificate?",
    answer:   "No.",
  },
  {
    question: "Can I import my store from Shopify or WooCommerce?",
    answer:   "Yes.",
  },
  {
    question: "Is my and my customers data secure?",
    answer:   "Yes.",
  },
  {
    question: "Can I use my own domain for the website?",
    answer:   "Yes.",
  },
  {
    question: "What forms of payments can I accept?",
    answer:   "Lots.",
  },
  {
    question: "How can I get help?",
    answer:   "Lots.",
  },
  {
    question: "Is there a mobile app?",
    answer:   "Yes.",
  },
  {
    question: "What's the difference between TinyCommerce and Etsy?",
    answer:   "Lots.",
  },
];
</script>

<template>
  <LayoutContainer>
    <div class="mx-auto max-w-4xl">
      <dl class="mt-16 divide-y divide-gray-900/10">
        <ClientOnly>
          <template v-if="questions">
            <FaqItem v-for="question in questions" :key="question.id" :answer="question.answer">
              {{ question.question }}
            </FaqItem>
          </template>
        </ClientOnly>
      </dl>
    </div>
  </LayoutContainer>
</template>
