<script setup lang="ts" name="utils">
const arr = Array.from({ length: 100 }, (_, i) => i);

const url = useRequestURL();
</script>

<template>
  <div>
    <h3>Utils Directory</h3>
    <ClientOnly>
      <p>utils/formatDate(): {{ formatDate() }}</p>
      <p>utils/randomEntry(): {{ randomEntry(arr) }}</p>
      <p>utils/formatNumber(): {{ formatNumber(1234) }}</p>
    </ClientOnly>
  </div>
</template>

<style scoped lang="scss"></style>
