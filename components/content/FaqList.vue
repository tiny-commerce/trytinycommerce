<script lang="ts" setup>
import type {PanelItem} from "~/components/ui/Accordion.vue";

const panels = ref<PanelItem[]>([]);
const {data:questions} = await useAsyncData('faq', () => $fetch('/api/list/faq'));

if(questions.value) {
  panels.value = questions.value.map(question => {
    return {
      key: question.question,
      title: question.question,
      content: question.answer,
    }
  })
}
</script>

<template>
  <LayoutContainer skinny>
    <UiAccordion v-if="panels.length" :panels isHTML/>
  </LayoutContainer>
</template>
