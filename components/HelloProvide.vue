<script setup lang="ts" name="HelloProvide">
// alternatively, you can also use it here
const { $hello } = useNuxtApp();
</script>

<template>
  <div>
    <h3>HelloProvide</h3>
    <p>test plugin/hello-provide</p>
    components/HelloProvide:
    {{ $hello("world") }}
  </div>
</template>

<style scoped lang="scss"></style>
