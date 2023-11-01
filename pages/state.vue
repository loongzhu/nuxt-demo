<script setup lang="ts" name="state">
import Advanced from "./../components/state/Advanced.vue";
import Basic from "./../components/state/Basic.vue";

const counter = useState("counter");
</script>

<template>
  <div>
    <!-- https://nuxt.com/docs/getting-started/state-management -->
    <h3>State Management</h3>
    <ClientOnly>
      <p>Basic's Counter: {{ counter }}</p>
      <Basic />
    </ClientOnly>

    <Advanced />
  </div>
</template>

<style scoped lang="scss"></style>
