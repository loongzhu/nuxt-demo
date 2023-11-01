<script setup lang="ts" name="dataviz">
import {} from "vue";
</script>

<template>
  <main>
    <ContentDoc>
      <template v-slot="{ doc }">
        <article>
          <h1>{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
        </article>
      </template>
    </ContentDoc>
  </main>
</template>

<style scoped lang="scss"></style>
