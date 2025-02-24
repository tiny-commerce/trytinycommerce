<script lang="ts" setup>
const {data: highlights} = await useAsyncData('highlights', () => $fetch('/api/list/highlights'));

function getColClass(index: number) {
  if(index === 0) return "lg:col-span-3"
  if(index === 1) return "lg:col-span-3"
  if(index === 2) return "lg:col-span-2"
  if(index === 3) return "lg:col-span-2"
  if(index === 4) return "lg:col-span-2"
}

const commonTop = 'absolute inset-px rounded-lg bg-white'
function getTopClass(index: number) {
  if(index === 0) return "max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]"
  if(index === 1) return "lg:rounded-tr-[2rem]"
  if(index === 2) return "lg:rounded-bl-[2rem]"
  if(index === 4) return "max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]"
}

const commonInner = "relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]"
function getInnerClass(index: number) {
  if(index === 0) return "max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]"
  if(index === 1) return "lg:rounded-tr-[calc(2rem+1px)]"
  if(index === 2) return "lg:rounded-bl-[calc(2rem+1px)]"
  if(index === 4) return "max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]"
}

const commonBottom = 'pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5'
function getBottomClass(index: number) {
  if(index === 0) return "max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]"
  if(index === 1) return "lg:rounded-tr-[2rem]"
  if(index === 2) return "lg:rounded-bl-[2rem]"
  if(index === 4) return "max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]"
}
</script>

<template>
  <div class="bg-surface-100 py-12">
    <LayoutContainer>
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-6 lg:grid-rows-2">
        <div
          v-for="(highlight, index) in highlights"
          :key="index + 'highlight'"
          :class="`relative ${getColClass(index)}`"
        >
          <div :class="`${commonTop} ${getTopClass(index)}`"/>
          <div :class="`${commonInner} ${getInnerClass(index)}`">
            <img :alt="highlight.alt" class="h-80 object-cover object-left" :src="highlight.image"/>

            <div class="p-10 pt-4">
              <h3 class="text-sm/4 font-semibold text-secondary">{{ highlight.eyebrow }}</h3>
              <p class="mt-2 text-lg font-medium tracking-tight text-gray-950">{{ highlight.heading }}</p>
              <p class="mt-2 max-w-lg text-sm/6 text-gray-600">{{ highlight.description }}</p>
            </div>
          </div>
          <div :class="`${commonBottom} ${getBottomClass(index)}`"/>
        </div>
      </div>
    </LayoutContainer>
  </div>
</template>
