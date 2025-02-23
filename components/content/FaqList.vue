<script setup>
import {Disclosure, DisclosureButton, DisclosurePanel} from "@headlessui/vue";
import {MinusSmallIcon, PlusSmallIcon} from "@heroicons/vue/24/outline";

const {data: questions} = await useAsyncData('faq', () => {
  return queryCollection("faq").all();
});

console.log('questions', questions.value);
console.log('first question', questions.value[0].meta.body.value);

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
        <template v-if="questions">

<!--        <ContentRenderer v-for="(question, index) in questions" :key="index" :value="question" />-->
        </template>
<!--        <Disclosure-->
<!--          v-for="faq in faqs" :key="faq.question" v-slot="{ open }" as="div" class="py-6 first:pt-0 last:pb-0"-->
<!--        >-->
<!--          <dt>-->
<!--            <DisclosureButton class="flex w-full items-start justify-between text-left text-gray-900">-->
<!--              <span class="text-xl/7 font-semibold">{{ faq.question }}</span> <span class="ml-6 flex h-7 items-center">-->
<!--                <PlusSmallIcon v-if="!open" aria-hidden="true" class="size-6" />-->
<!--                <MinusSmallIcon v-else aria-hidden="true" class="size-6" />-->
<!--              </span>-->
<!--            </DisclosureButton>-->
<!--          </dt>-->
<!--          <DisclosurePanel as="dd" class="mt-2 pr-12">-->
<!--            <p class="text-base/7 text-gray-600">{{ faq.answer }}</p>-->
<!--          </DisclosurePanel>-->
<!--        </Disclosure>-->
      </dl>
    </div>
  </LayoutContainer>
</template>
