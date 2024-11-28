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
  "relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]";

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
      <div class="px-10 py-6">
        <div class="flex items-center gap-x-3">
          <div
            class="shrink-0 w-12 h-12 flex items-center justify-center rounded-full border-2 border-primary"
          >
            <UiIcon :icon="icon" />
          </div>
          <div>
            <p class="text-sm/4 font-semibold text-primary uppercase">
              {{ tag }}
            </p>

            <UiHeading level="h3" size="sm" color="light">
              {{ heading }}
            </UiHeading>
          </div>
        </div>

        <div class="mt-2 max-w-lg"><slot></slot></div>
      </div>
    </div>
    <div :class="shadowClasses" />
  </div>
</template>
