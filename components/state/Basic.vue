<script setup lang="ts" name="Basic">
import { ElButton } from "element-plus";

// Create a reactive state and set default value
const counter = useState<number>("counter", () =>
  Math.round(Math.random() * 1000)
);
</script>

<template>
  <div>
    <h3>Basic</h3>
    <p>Counter: {{ counter }}</p>
    <ElButton @click="counter++">+</ElButton>
    <ElButton @click="counter--">-</ElButton>
  </div>
</template>

<style scoped lang="scss"></style>
