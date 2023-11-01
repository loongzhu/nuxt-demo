<script setup lang="ts" name="state">
import { ElButton } from "element-plus";

const mainStore = useMainStore();

const { counter, doubleCounter, doubleCounterPlusOne } = storeToRefs(mainStore);

const { reset, add, reduce } = mainStore;

const persistedStore = usePersistedStore();

const {
  counter: pCounter,
  doubleCounter: pdoubleCounter,
  doubleCounterPlusOne: pdoubleCounterPlusOne,
} = storeToRefs(persistedStore);

const { reset: preset, add: padd, reduce: preduce } = persistedStore;

const persisted = useCookie("persisted");
console.log("🚀 ~ a:", persisted);

const err = useError();
console.log("🚀 ~ err:", err);
</script>

<template>
  <div>
    <h3>Store Directory</h3>
    <p>store mainStore's</p>
    <p>Counter: {{ counter }}</p>
    <p>Double Counter: {{ doubleCounter }}</p>
    <p>Double Counter Plus One: {{ doubleCounterPlusOne }}</p>
    <ElButton @click="add">+</ElButton>
    <ElButton @click="reduce">-</ElButton>
    <ElButton @click="reset">reset</ElButton>

    <p>store persistedStore's</p>
    <p>Counter: {{ pCounter }}</p>
    <p>Double Counter: {{ pdoubleCounter }}</p>
    <p>Double Counter Plus One: {{ pdoubleCounterPlusOne }}</p>
    <ElButton @click="padd">+</ElButton>
    <ElButton @click="preduce">-</ElButton>
    <ElButton @click="preset">reset</ElButton>
  </div>
</template>

<style scoped lang="scss"></style>
