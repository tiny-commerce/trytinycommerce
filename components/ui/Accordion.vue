<script lang="ts" setup>
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';

export interface PanelItem {
  key: string | number;
  title: string;
  content: any;
}

defineProps<{
  panels: PanelItem[],
  isHTML?: boolean,
}>()
</script>


<template>
  <Accordion value="">
    <AccordionPanel v-for="panel in panels" :key="panel.title" :value="panel.key">
      <AccordionHeader>{{ panel.title }}</AccordionHeader>

      <AccordionContent v-if="isHTML">
        <div v-html="panel.content"/>
      </AccordionContent>
      <AccordionContent v-else>
        <p>{{ panel.content }}</p>
      </AccordionContent>
    </AccordionPanel>
  </Accordion>
</template>
