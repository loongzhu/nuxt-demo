<script setup lang="ts" name="[...slug]">
const route = useRoute();
</script>

<template>
  <main>
    <p>{{ route.params.slug }}</p>

    <p>{{ route.path }}</p>
    Similar to
    <ContentDoc>
      <template v-slot="{ doc }">
        <article>
          <h1>{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
        </article>
      </template>

      <template #not-found>
        <h1>Document not found</h1>
      </template>

      <template #empty>
        <h1>Document is empty</h1>
      </template>
    </ContentDoc>
  </main>
</template>

<style scoped lang="scss"></style>
