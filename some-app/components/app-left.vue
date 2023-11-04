<script setup lang="ts" name="app-left">
import type { item } from "./types";

interface Props {
  data: item[];
  scrollTop: number;
  labels?: string[];
}

const props = withDefaults(defineProps<Props>(), {
  data: () => [],
  scrollTop: 0,
});

const { data, scrollTop } = toRefs(props);

const emits = defineEmits(["onScroll"]);

const left_body = ref<HTMLElement>();

let ticking = false;
function onScroll() {
  if (!ticking) {
    window.requestAnimationFrame(function () {
      emits("onScroll", left_body.value?.scrollTop);
      ticking = false;
    });
    ticking = true;
  }
}

watch(
  () => scrollTop.value,
  (now) => {
    left_body.value?.scrollTo({ top: now });
  }
);

const maxWidth = ref<number>(400);

const isMouseDown = ref<boolean>(false);

const max = 516;
const min = 112;

function mousemove(e: MouseEvent) {
  if (isMouseDown.value) {
    const { movementX } = e;

    maxWidth.value += movementX;

    if (maxWidth.value > max) {
      maxWidth.value = max;
    }

    if (maxWidth.value < min) {
      maxWidth.value = min;
    }
  }
}

const isShowInfo = computed<boolean>(() => {
  return maxWidth.value > min;
});

onMounted(() => {
  window.addEventListener("mousemove", mousemove);
  window.addEventListener("mouseup", () => {
    isMouseDown.value = false;
  });
});
</script>

<template>
  <div class="app_left">
    <div class="app_left-header">APP left</div>
    <div
      ref="left_body"
      class="app_left-body"
      :mousedown="isMouseDown"
      :style="{ '--maxwidth': maxWidth + 'px' }"
      @scroll="onScroll"
    >
      <div class="app_left-item-titles">
        <div class="app_left-item-title" v-for="item in data">
          <div>{{ item.title }}</div>
        </div>
      </div>
      <div v-show="isShowInfo" class="app_left-item-infos">
        <div class="app_left-item-info" v-for="item in data">
          <div v-for="info of item.info">
            {{ info }}
          </div>
        </div>
      </div>
    </div>
    <div
      v-show="isShowInfo"
      class="i-tabler-arrow-big-left-lines app_left-header-icons"
      @click="() => (maxWidth = min)"
    ></div>
    <div
      v-show="!isShowInfo"
      class="i-tabler-arrow-big-right-lines app_left-header-icons"
      @click="() => (maxWidth = max)"
    ></div>
    <div
      class="app_left-move"
      @mousedown="() => (isMouseDown = true)"
      @mouseup="() => (isMouseDown = false)"
    ></div>
  </div>
</template>

<style scoped lang="scss">
@import "@app/assets/custom.scss";

$movewidth: 10px;

.app_left {
  max-height: calc(100% - 20px);
  background-color: $bg;
  position: relative;
  margin: $movewidth;
  padding: 10px 0 0 10px;
}

.app_left-header {
  height: 50px;
  padding: 5px 10px;
  line-height: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
  text-align: center;
  border: 1px solid $border-color;
  border-bottom: none;
  margin-right: 10px;
  background-color: $bg-bar;
}

.app_left-header-icons {
  position: absolute;
  right: -10px;
  top: 22px;
  z-index: 1;
  cursor: pointer;
}

.app_left-body {
  display: flex;
  flex-direction: row;
  flex: 1;
  background-color: #fff;
  overflow-y: auto;
  width: var(--maxwidth);
  max-height: calc(100% - 60px);
  margin-bottom: 10px;

  &[mousedown="false"] {
    transition: width 0.3s;
  }
}

.app_left-item-titles {
  position: sticky;
  left: 0;
  z-index: 1;
  padding-bottom: 10px;
}

.app_left-item-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:last-child {
    border-bottom: 1px solid $border-color;
  }
  & > div {
    @include text-omit;
    @include default-grid(80px);
    border-right: 1px solid $border-color;
    background-color: #fff;
  }
}

.app_left-item-info {
  display: flex;

  &:last-child {
    border-bottom: 1px solid $border-color;
  }
  & > div {
    @include text-omit;
    @include default-grid(80px);

    &:first-child {
      border-left: none;
    }
    &:last-child {
      border-right: 1px solid $border-color;
    }
  }
}

.app_left-move {
  border-radius: 4px;
  background-color: #dbdbdb;
  position: absolute;
  height: 100%;
  width: $movewidth;
  right: -$movewidth;
  top: 0;
  cursor: move;
  &:hover {
    background-color: #c5c5c5;
  }
}
</style>
