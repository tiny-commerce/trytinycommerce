<script setup lang="ts">
import Button from "primevue/button";
import type { IconList } from "~/composables/useIcon";

const { getIcon } = useIcon();

interface ComponentProps {
  label?: string;
  color?: "primary" | "secondary" | "info" | "success" | "warn" | "danger";
  variant?: "solid" | "text" | "outlined";
  size?: "small" | "large";
  icon?: IconList;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
}

const props = withDefaults(defineProps<ComponentProps>(), {
  color: "primary",
  variant: "solid",
  disabled: false,
  loading: false,
  fullWidth: false,
});

const text = ref(props.variant === "text");
const outlined = ref(props.variant === "outlined");

const iconString = ref<string | undefined>(undefined);
if (props.icon) iconString.value = getIcon(props.icon);
</script>

<template>
  <Button
    :label="label"
    :severity="color"
    :text="text"
    :outlined="outlined"
    :icon="iconString"
    :disabled="disabled"
    :loading="loading"
    :fluid="fullWidth"
  />
</template>
