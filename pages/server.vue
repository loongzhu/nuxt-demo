<script setup lang="ts" name="server">
import { ElOption, ElSelect } from "element-plus";
const { data } = await useFetch("/api/hello-server");

const d = await useFetch("/api/read");

const { data: legacy } = await useFetch("/api/legacy");

const name = ref("");
const hello = ref("Hello, World!");

watch(name, async () => {
  const { data } = await useFetch(
    `/api/hello/${name.value ? name.value : "World"}`
  );
  hello.value = data.value as string;
});

const keys = ref<string[]>([]);

const item = reactive({
  key: "",
  value: "",
});

const key = ref<string>();
const value = ref<string>();

async function getKeys() {
  const { data } = await useFetch("/api/storage/keys");

  keys.value = data.value as string[];

  key.value = keys.value[0];
  selectKey(key.value);
}

getKeys();

async function selectKey(key: string) {
  if (!key) return;
  const { data } = await useFetch(`/api/storage/${key}`);
  value.value = data.value as string;
}

async function set() {
  await $fetch("/api/storage/set", {
    method: "post",
    body: item,
  });
  getKeys();
}

async function clear() {
  await useFetch("/api/storage/clear");
  getKeys();
}

async function remove() {
  await useFetch(`/api/storage/${key.value}`, { method: "post" });
  getKeys();
}

const { data: cookies } = await useFetch("/api/cookies");
</script>

<template>
  <div>
    <h3>Server Directory</h3>

    <p>some use server api example</p>

    <pre>const { data } = await useFetch("/api/hello-server");</pre>
    <pre>data: {{ data }}</pre>

    <h3>server/api/hello/[name].ts</h3>
    <p>
      <input input v-model="name" type="text" />
      {{ hello }}
    </p>

    <h3>server storage</h3>
    <p>keys: {{ keys }}</p>

    <div>
      <input input v-model="item.key" type="text" placeholder="input key" />
      <input input v-model="item.value" type="text" placeholder="input key" />

      <button button @click="set">set item</button>
    </div>

    <div m-2>
      key:
      <ElSelect
        v-model="key"
        @change="selectKey"
        size="small"
        style="width: 100px"
      >
        <ElOption
          v-for="item in keys"
          :key="item"
          :label="item"
          :value="item"
        ></ElOption>
      </ElSelect>
      <span> : Value {{ value }}</span>
    </div>

    <button button @click="clear">clear</button>
    <button button @click="remove">remove</button>

    <h3>Request Cookies</h3>
    {{ cookies }}
  </div>
</template>

<style scoped lang="scss"></style>
