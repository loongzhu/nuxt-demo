<script setup lang="ts" name="Advanced">
import { ElOption, ElSelect } from "element-plus";
const locales = useLocales();
const locale = useLocale();
const date = useLocaleDate(new Date("2016-10-26"));
</script>

<template>
  <div>
    <h3>Advanced</h3>
    <h4>Nuxt birthday</h4>
    <p>{{ date }}</p>
    <label for="locale-chooser">Preview a different locale: </label>
    <ElSelect id="locale-chooser" v-model="locale">
      <el-option v-for="locale of locales" :key="locale" :value="locale">
        {{ locale }}
      </el-option>
    </ElSelect>
  </div>
</template>

<style scoped lang="scss"></style>
