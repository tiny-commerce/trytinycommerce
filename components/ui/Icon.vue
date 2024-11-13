<script setup lang="ts">
import type { IconList } from "~/composables/useIcon";

interface ComponentProps {
  icon: IconList;
  color: "primary" | "secondary" | "white";
}

const props = defineProps<ComponentProps>();

const { getIcon } = useIcon();
const iconString = computed(() => getIcon(props.icon));
</script>

<template>
  <i :class="iconString"></i>
</template>
