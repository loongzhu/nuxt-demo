<script setup lang="ts" name="plugin">
import {} from "vue";
import HelloProvide from "./../components/HelloProvide.vue";
</script>

<template>
  <div>
    <h3>Plugin Directory</h3>
    <HelloProvide />

    <div Lv2>
      Use plugin/my-directive v-focus: <input input v-focus type="text" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
