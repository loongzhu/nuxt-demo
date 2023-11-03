<script setup lang="ts" name="app-bar">
import { ElTooltip } from "element-plus";
import {} from "vue";

import dayjs from "dayjs";

interface Props {
  date: string;
  info: any;
}

const props = withDefaults(defineProps<Props>(), {
  date: () => dayjs().startOf("day").format("YYYY-MM-DD HH:mm:ss"),
  info: () => ({}),
});

const { date, info } = toRefs(props);

const left = computed<number>(() => {
  const diffSeconds = dayjs(info.value.start).diff(dayjs(date.value));
  return (diffSeconds / 60 / 60 / 1000) * 81;
});

const width = computed<number>(() => {
  const diffSeconds = dayjs(info.value.end).diff(dayjs(info.value.start));
  return (diffSeconds / 60 / 60 / 1000) * 81;
});

function onDrag(event: DragEvent) {
  const target = event.target as HTMLElement;
  target.classList.add("dottedScroll");

  target.childNodes.forEach((node) => {
    if (node instanceof HTMLElement) {
      node.classList.add("draging");
    }
  });

  const { id } = target.dataset;
  event.dataTransfer?.setData("bar-id", id as string);
}

function onDrop(event: DragEvent) {
  const target = event.target as Element;
  target.classList.remove("dottedScroll");

  target.childNodes.forEach((node) => {
    if (node instanceof HTMLElement) {
      node.classList.remove("draging");
    }
  });
}
</script>

<template>
  <div
    class="app_bar"
    draggable="true"
    :style="{ '--left': left + 'px', '--width': width + 'px' }"
    :data-id="info.id"
    @dragstart.stop="onDrag"
    @dragover.stop
    @dragend.stop="onDrop"
  >
    <ElTooltip placement="top">
      <template #content>
        {{ info.name }}
      </template>
      <div class="name" @drop.prevent.stop>bar-{{ info.name }}</div>
    </ElTooltip>
  </div>
</template>

<style scoped lang="scss">
@import "@app/assets/custom.scss";

.app_bar {
  width: var(--width);
  position: absolute;
  padding: 2px;
  top: 4px;
  left: var(--left);
  background-color: $bg-bar;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  border-radius: 4px;
  & > div {
    @include text-omit;
    width: 100%;
  }

  .draging {
    background-color: $bg-bar;
  }
}

@keyframes linearGradientMove {
  100% {
    background-position: 10px 0, -10px 100%, 0 -10px, 100% 10px;
  }
}

.dottedScroll {
  // 渐变轴为90度，#333 设置占了图片的 50%。 透明部分占了50%
  background: linear-gradient(90deg, #333 50%, transparent 50%) repeat-x,
    linear-gradient(90deg, #333 50%, transparent 50%) repeat-x,
    linear-gradient(0deg, #333 50%, transparent 50%) repeat-y,
    linear-gradient(0deg, #333 50%, transparent 50%) repeat-y;
  // 设置背景图片大小
  background-size: 10px 2px, 10px 2px, 2px 10px, 2px 10px;
  // 为每一个背景图片设置初位置
  background-position: 0 0, 0 100%, 0 0, 100% 0;

  animation: linearGradientMove 0.5s linear infinite;
}
</style>
