<script setup lang="ts">
import type { IconList } from "~/composables/useIcon";

interface ComponentProps {
  icon: IconList;
  color?: "primary" | "secondary" | "danger" | "white";
}

const props = withDefaults(defineProps<ComponentProps>(), {
  color: "primary",
});

const { getIcon } = useIcon();
const iconClass = computed(() => getIcon(props.icon));

let colorClass = "";

if (props.color === "primary") colorClass = "text-primary";
if (props.color === "white") colorClass = "text-white";
</script>

<template>
  <i :class="[iconClass, colorClass]"></i>
</template>
