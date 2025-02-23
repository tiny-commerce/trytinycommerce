<script setup>
import {CheckIcon} from "@heroicons/vue/20/solid";

const includedFeatures = [
  "eCommerce Website w/ Custom Domain",
  "Simple CRM",
  "Customer Portal",
  "Inventory Management",
  "Product Variants, Collections & Groups",
  "Schedule Events",
  "Discount Codes",
  "Local Store Management",
  "Wholesale Invoicing w/ ACH Payments",
  "Reporting and Analytics",
];
const bottomFeature = "Unlimited Products, Customers, Users, and Everything Else";

const basePrice = "35";
const transactionPricingOnline = "2.9% + 30¢";
const transactionPricingInPerson = "2.7% + 5¢";

const addOns = [
  {
    name:              "POS System",
    price:             "40",
    additionalPricing: "Requires hardware purchase",
    description:       `Sell in person with POS hardware. Accept credit cards at a discounted rate of ${transactionPricingInPerson}.`,
  },
  {
    name:              "In-App Shipping",
    price:             "25",
    additionalPricing: "Plus shipping rates",
    description:       "Print shipping labels, email a tracking code to your customers, get insurance, and schedule a carrier pickup.",
  },
  {
    name:              "Collect Sales Tax",
    price:             "20",
    additionalPricing: "Plus 50¢ per transaction",
    description:       "More templates and customization options for your eCommerce website. Ability to upload CSS files for a truly custom website.",
  },
  {
    name:        "Subscriptions",
    price:       "10",
    description: "Send your customers a subscription box and get recurring revenue. Allow customers to manage subscriptions via their customer portal.",
  },
  {
    name:        "Digital Products",
    price:       "15",
    description: "Store, sell and deliver digital files to your customers. Allow customers to manage downloads via their customer portal.",
  },
  {
    name:        "Email Newsletter",
    price:       "15",
    description: "Let your customers signup and receive a regular email newsletter. Includes 3000 emails per month.",
  },
];
</script>

<template>
  <LayoutContainer>
    <div class="mx-auto max-w-2xl rounded-3xl ring-1 ring-surface-200 lg:mx-0 lg:flex lg:max-w-none">
      <div class="p-8 sm:p-10 lg:flex-auto">
        <h3 class="text-3xl font-semibold tracking-tight text-surface-700">One Base Price</h3>
        <p class="mt-2 text-base/7 text-surface-600">
          Instead of having to pay for a higher plan for that one feature we start with a base plan and let you add-on
          only the features you need. </p>
        <div class="mt-4 flex items-center gap-x-4">
          <h4 class="flex-none text-md/6 font-semibold text-primary">What’s included</h4>
          <div class="h-px flex-auto bg-surface-100" />
        </div>
        <ul class="mt-6 grid grid-cols-1 gap-4 text-sm/6 text-surface-600 sm:grid-cols-2" role="list">
          <li v-for="feature in includedFeatures" :key="feature" class="flex gap-x-3">
            <CheckIcon aria-hidden="true" class="h-6 w-5 flex-none text-secondary" />
            {{ feature }}
          </li>
          <li class="flex gap-x-3 sm:col-span-2">
            <CheckIcon aria-hidden="true" class="h-6 w-5 flex-none text-secondary" />
            {{ bottomFeature }}
          </li>
        </ul>
      </div>

      <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0">
        <div
          class="h-full rounded-2xl bg-surface-100 py-10 text-center ring-1 ring-inset ring-surface-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16"
        >
          <div class="mx-auto max-w-sm px-8">
            <p class="flex items-baseline justify-center gap-x-2">
              <span class="text-9xl font-semibold tracking-tight text-surface-900">${{ basePrice }}</span> <span
              class="text-4xl/6 font-semibold tracking-wide text-surface-600"
            >/mo</span>
            </p>
            <p class="my-3 text-xl text-surface-500">and</p>
            <div class="text-surface-600 space-y-1">
              <p class="text-4xl">{{ transactionPricingOnline }}</p>
              <p class="text-xl">per successful charge for domestic cards</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="isolate mx-auto mt-12 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <div
        v-for="(addOn, index) in addOns" :key="index"
        class="p-2 flex flex-col justify-between rounded-2xl bg-white ring-1 ring-surface-200"
      >
        <div class="px-8 p-6">

          <p class="text-lg/7 font-semibold text-secondary">Add-on</p>
          <h3 class="text-surface-700 text-3xl/8 font-semibold">{{ addOn.name }}</h3>
          <p class="mt-1 text-surface-600">{{ addOn.description }}</p>
        </div>

        <div class="mt-2 rounded-2xl bg-surface-100 py-4 ring-1 ring-inset ring-surface-900/5">
          <p class="flex items-baseline justify-center gap-x-1">
            <span class="text-5xl font-semibold tracking-tight text-surface-900">${{ addOn.price }}</span> <span
            class="text-xl/6 font-semibold text-surface-600"
          >/mo</span>
          </p>
          <p v-if="addOn.additionalPricing" class="mt-2 text-center font-semibold text-surface-600">
            {{ addOn.additionalPricing }} </p>
        </div>
      </div>
    </div>
  </LayoutContainer>
</template>
