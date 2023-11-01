<script setup lang="ts" name="[id]">
const route = useRoute();

if (route.params.group === "admins" && !route.params.id) {
  console.log("Warning! Make sure user is authenticated!");
}
</script>

<template>
  <div Lv2>
    <h3>this: pages/users-[group]/[id].vue</h3>
    <h4>users-{{ route.params.group }}/{{ route.params.id }}</h4>
  </div>
</template>

<style scoped lang="scss"></style>
