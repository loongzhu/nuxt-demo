<script setup lang="ts" name="app">
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <main>
    <NuxtLayout>
      <!-- Markup shared across all pages, ex: NavBar -->
      <NuxtPage Lv1 />
    </NuxtLayout>
  </main>
</template>

<style scoped lang="scss">
main {
  padding: 1rem;
  min-height: calc(100vh - 2rem);
}
</style>
