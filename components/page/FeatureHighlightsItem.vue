<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    tag: string;
    heading: string;
    icon: IconList;
    width?: "sm" | "md" | "lg";
    position?: "tl" | "tr" | "bl" | "br";
  }>(),
  {
    width: "md",
  }
);

const largeCorner = "2rem";
const largeCornerBox = `[calc(${largeCorner}+1px)]`;

let widthClass = "relative";

if (props.width === "sm") widthClass += " lg:col-span-2";
if (props.width === "md") widthClass += " lg:col-span-3";
if (props.width === "lg") widthClass += " lg:col-span-4";

let boxClasses =
  "h-full flex flex-col p-4 pl-12 rounded-[calc(theme(borderRadius.lg)+1px)] bg-white";

let shadowClasses =
  "absolute inset-px rounded-lg shadow ring-1 ring-black/5 pointer-events-none";

if (props.position === "tl") {
  boxClasses += ` max-lg:rounded-t-${largeCornerBox} lg:rounded-tl-${largeCornerBox}`;
  shadowClasses += ` max-lg:rounded-t-[${largeCorner}] lg:rounded-tl-[${largeCorner}]`;
}

if (props.position === "tr") {
  boxClasses += ` lg:rounded-tr-${largeCornerBox}`;
  shadowClasses += ` lg:rounded-tr-[${largeCorner}]`;
}

if (props.position === "bl") {
  boxClasses += ` max-lg:rounded-b-${largeCornerBox} lg:rounded-bl-${largeCornerBox}`;
  shadowClasses += ` max-lg:rounded-b-[${largeCorner}] lg:rounded-bl-[${largeCorner}]`;
}

if (props.position === "br") {
  boxClasses += ` lg:rounded-br-${largeCornerBox}`;
  shadowClasses += ` lg:rounded-br-[${largeCorner}]`;
}
</script>

<template>
  <div :class="widthClass">
    <div :class="boxClasses">
      <p class="text-sm/4 font-semibold text-primary uppercase">
        {{ tag }}
      </p>

      <UiHeading level="h3" size="sm" color="light">
        {{ heading }}
      </UiHeading>

      <div class="mt-2 max-w-lg"><slot></slot></div>
    </div>
    <div :class="shadowClasses" />

    <UiHexagon size="lg" class="absolute top-2 -left-4">
      <UiIcon :icon="icon" color="white" class="text-2xl" />
    </UiHexagon>
  </div>
</template>
