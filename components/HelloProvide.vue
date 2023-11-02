<script setup lang="ts" name="HelloProvide">
// alternatively, you can also use it here
const { $hello } = useNuxtApp();

const name = ref("world");
</script>

<template>
  <div Lv2>
    <h3>HelloProvide</h3>
    <p>file: components/HelloProvide</p>
    <p>test plugin/hello</p>
    <input input v-model="name" type="text" />
    {{ $hello(name) }}
  </div>
</template>

<style scoped lang="scss"></style>
