<script lang="ts" setup>
import type {IconList} from "~/composables/useIcon";

interface ComponentProps {
  icon: IconList;
  color?: "primary" | "secondary" | "danger" | "white";
}

const props = withDefaults(defineProps<ComponentProps>(), {
  color: "primary",
});

const {getIcon} = useIcon();
const iconClass = computed(() => getIcon(props.icon));

let colorClass = ref("");

if (props.color === "primary") colorClass.value = "text-primary";
if (props.color === "white") colorClass.value = "text-white";
</script>

<template>
  <i :class="[iconClass, colorClass]"></i>
</template>
