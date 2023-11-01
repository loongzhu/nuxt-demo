<script setup lang="ts" name="child">
definePageMeta({
  key: (route) => route.fullPath,
});
// console.log("🚀 ~ props:", props);

const props = defineProps<{
  foobar: number;
}>();
console.log("🚀 ~ props:", props);

const { foobar } = toRefs(props);

const route = useRoute();
console.log("🚀 ~ route:", route.meta);
console.log(route.meta.title); // I am the parent view
</script>

<template>
  <div Lv2>
    <h4>this: pages/parent/child.vue</h4>
    <h4>I am the child view</h4>
    {{ props }}
  </div>
</template>

<style scoped lang="scss"></style>
