<script setup lang="ts" name="component">
import {} from "vue";
</script>

<template>
  <div>
    <h3>component Directory</h3>

    <!-- see https://nuxt.com/docs/guide/directory-structure/components#component-names -->

    <p>components\base\foo\Button.vue:</p>

    <p>
      For clarity, we recommend that the component's filename matches its name.
      So, in the example above, you could rename Button.vue to be: BaseFooButton
    </p>

    <!-- <BaseFooButton /> -->

    <p>
      If you want to auto-import components based only on its name, not path,
      then you need to set pathPrefix option to false using extended form of the
      configuration object:
    </p>

    <Button />
  </div>
</template>

<style scoped lang="scss"></style>
