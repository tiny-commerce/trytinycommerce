<script lang="ts" setup>
import Button from "primevue/button";
import type {IconList} from "~/composables/useIcon";

const {getIcon} = useIcon();

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
  color:     "primary",
  variant:   "solid",
  disabled:  false,
  loading:   false,
  fullWidth: false,
});

const text = ref(props.variant === "text");
const outlined = ref(props.variant === "outlined");

const iconString = ref<string | undefined>(undefined);
if (props.icon) iconString.value = getIcon(props.icon);

const rootClass = ref("");
if (outlined.value) rootClass.value = rootClass.value + " bg-white";
if (!text.value) rootClass.value = rootClass.value + " min-w-32";
if (text.value) rootClass.value = rootClass.value + " px-0";
</script>

<template>
  <Button
    :disabled="disabled" :fluid="fullWidth" :icon="iconString" :label="label" :loading="loading" :outlined="outlined"
    :pt:root:class="rootClass" :severity="color" :text="text"
  />
</template>
