<script setup lang="ts" name="about">
definePageMeta({
  layout: "custom",
});

// You might choose this based on an API call or logged-in status
// const layout = "custom";
</script>

<template>
  <div>
    <!-- <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout> -->

    <h3>About Page</h3>

    <p>set page layout to "custom" in about.vue</p>

    <NuxtLink Link to="/">Home</NuxtLink>
  </div>
</template>

<style scoped lang="scss"></style>
