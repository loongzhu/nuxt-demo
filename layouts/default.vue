<script setup lang="ts" name="default">
const route = useRoute();

// const url = useState(() => useRequestURL());
</script>

<template>
  <div>
    <AppHeader />

    <p>layouts default Some default layout content shared across all pages</p>

    <!-- <h4 text-blue>URL: {{ url }}</h4>

    <h4 text-blue>Path: {{ url.pathname }}</h4> -->

    <h4 text-blue>Route: {{ route.path }}</h4>

    <slot />

    <AppFooter />
  </div>
</template>

<style scoped lang="scss"></style>
