<script lang="ts" setup>
import "primeicons/primeicons.css";

useHead(
{
  htmlAttrs: {
    class: "h-full",
  },
  bodyAttrs: {
    class: "h-full font-sans text-surface-600",
  },
  link:      [
    {type: "image/png", href: "/favicon-96x96.png", sizes: "96x96"},
    {rel: "shortcut icon", href: "/favicon.ico"},
    {rel: "icon", type: "image/svg+xml", href: "/favicon.svg"},
    {rel: "manifest", href: "/site.webmanifest"},
    {rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180"},
  ],
  meta:      [
    {name: "viewport", content: "width=device-width, initial-scale=1"},
    {name: "apple-mobile-web-app-title", content: "TinyCommerce"},
  ],
});
</script>

<template>
  <LayoutHeader />
  <NuxtPage />
  <LayoutFooter />
</template>
