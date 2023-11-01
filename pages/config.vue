<script setup lang="ts" name="config">
const appConfig = useAppConfig();

console.log("appConfig", appConfig);
console.log("appConfig.theme", appConfig.theme);
console.log("appConfig.array()", appConfig.array());

const use = `const appConfig = useAppConfig();`;

const runtimeConfig = useRuntimeConfig();
console.log("🚀 ~ runtimeConfig:", runtimeConfig);

const env = await useFetch("/api/foo");
console.log("🚀 ~ env:", env);
</script>

<template>
  <div>
    <h3>app.config.ts</h3>
    <pre>{{ use }}</pre>
    <pre>appConfig: {{ appConfig }}</pre>
    <pre>appConfig.array: {{ appConfig.array }}</pre>
    <pre>appConfig.array(): {{ appConfig.array() }}</pre>
  </div>
</template>

<style scoped lang="scss"></style>
