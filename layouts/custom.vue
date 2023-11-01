<script setup lang="ts" name="custom">
import {} from "vue";
</script>

<template>
  <div>
    <header>
      <slot name="header"> Default header content </slot>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss"></style>
