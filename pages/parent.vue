<script setup lang="ts" name="parent">
import { someData } from "~/utils/example";

definePageMeta({
  title: "I am the parent view",
  someData,
});
</script>

<template>
  <div>
    <h3>this: pages/parent.vue</h3>
    <h3>I am the parent view</h3>
    <NuxtPage :foobar="123" />
    <!-- <NuxtPage :page-key="route => route.fullPath" /> -->
  </div>
</template>

<style scoped lang="scss"></style>
