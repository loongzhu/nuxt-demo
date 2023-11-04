<script setup lang="ts" name="app">
import dayjs from "dayjs";
import type { bar, item } from "./types";

function getBars(length: number, index: number) {
  const max = () => Math.floor(Math.random() * 5) + 1;
  const space = () => Math.floor(Math.random() * 5) + 0.5;

  let lastend = dayjs().startOf("day").format("YYYY-MM-DD HH:mm:ss");

  const bars: bar[] = Array.from({ length }, (_, i) => {
    const start = dayjs(lastend)
      .add(space(), "hour")
      .format("YYYY-MM-DD HH:mm:ss");

    const end = dayjs(start).add(max(), "hour").format("YYYY-MM-DD HH:mm:ss");
    lastend = end;

    const name = `name-${index}-${i}`;

    const id = `id-${index}-${i}`;

    return { id, name, start, end };
  });

  return bars;
}

function getItem(index: number): item {
  const items = {
    id: `${index}`,
    title: `title${index}`,
    info: {
      time: `time${index}`,
      date: `date${index}`,
      order: `order${index}`,
      name: `name${index}`,
    },
    bars: getBars(10, index),
  };
  return items;
}

const data = ref<item[]>(Array.from({ length: 10 }, (_, i) => getItem(i)));

function adjustBar({
  barId,
  tabulationId,
}: {
  barId: string;
  tabulationId: string;
}) {
  const tabulation = data.value.find((item) => item.id === tabulationId);

  let found: bar = {} as bar;

  data.value.forEach((item) => {
    item.bars = item.bars.filter((bar: bar) => {
      if (bar.id === barId) found = bar;
      return bar.id !== barId;
    });
  });

  tabulation?.bars.push(found);
}

const $scrollTop = ref<number>(0);

function $onScroll(top: number) {
  $scrollTop.value = top;
}
</script>

<template>
  <div class="app">
    <AppLeft :data="data" :scrollTop="$scrollTop" @onScroll="$onScroll" />
    <AppRight
      :data="data"
      :scrollTop="$scrollTop"
      @adjustBar="adjustBar"
      @onScroll="$onScroll"
    />
  </div>
</template>

<style scoped lang="scss">
.app {
  @import "@app/assets/main.scss";

  max-height: 300px;
  display: flex;
  flex-direction: row;

  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
</style>
