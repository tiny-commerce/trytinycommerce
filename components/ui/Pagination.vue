<script lang="ts" setup>
import Paginator from "primevue/paginator";
</script>

<template>
  <Paginator
    :rows="10"
    :template="{
      '640px': 'PrevPageLink CurrentPageReport NextPageLink',
      '960px':
        'FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink',
      '1300px':
        'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink',
      default:
        'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink JumpToPageDropdown JumpToPageInput',
    }"
    :totalRecords="120"
  >
  </Paginator>
</template>
