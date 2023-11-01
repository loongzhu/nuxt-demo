<script setup lang="ts" name="AppHeader">
import {} from "vue";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Components",
    path: "/components",
  },
  {
    name: "Config",
    path: "/config",
  },
  {
    name: "Hello",
    path: "/hello",
  },
  {
    name: "Middleware",
    path: "/middleware",
  },
  {
    name: "Modules",
    path: "/modules",
  },
  {
    name: "Parent",
    path: "/parent",
  },
  {
    name: "Parent's Child",
    path: "/parent/child",
  },
  {
    name: "Plugin",
    path: "/plugin",
  },
  {
    name: "Server",
    path: "/server",
  },
  {
    name: "State",
    path: "/state",
  },
  {
    name: "Store",
    path: "/store",
  },
  {
    name: "Users-[group]",
    path: "/users-[group]",
  },
  {
    name: "Users-[group]-[id]",
    path: "/users-[group]/[id]",
  },
  {
    name: "Utils",
    path: "/utils",
  },
  {
    name: "Working",
    path: "/working",
  },
  {
    name: "Custom",
    path: "/about",
  },
  {
    name: "Hello routers",
    path: "/hello-routers",
  },
  {
    name: "Not Found",
    path: "/Not Found",
  },
];
</script>

<template>
  <div Lv1>
    <h2>app header</h2>
    <NuxtLink link v-for="item in routes" :to="item.path">{{
      item.name
    }}</NuxtLink>
  </div>
</template>

<style scoped lang="scss"></style>
