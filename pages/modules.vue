<script setup lang="ts" name="modules">
const module = await useFetch("/api/modulehello");

const use = `const module = await useFetch("/api/modulehello");`

</script>

<template>
  <div>
    <h3>Modules Directory</h3>
    <ClientOnly>
      <p>modules/api/hello: <pre>{{ use }}</pre> <pre>{{ module }}</pre></p>
    </ClientOnly>
  </div>
</template>

<style scoped lang="scss"></style>
