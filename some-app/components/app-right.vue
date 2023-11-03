<script setup lang="ts" name="right">
import dayjs from "dayjs";

interface Props {
  date?: string;
  data: any[];
  scrollTop: number;
  labels?: string[];
}

interface State {
  statrTime: string;
  endTime: string;
}

const props = withDefaults(defineProps<Props>(), {
  date: () => dayjs().startOf("day").format("YYYY-MM-DD HH:mm:ss"),
  data: () => [],
  scrollTop: 0,
  labels: () => Array.from({ length: 10 }, (_, i) => `label${i}`),
});

const { date, data, labels, scrollTop } = toRefs(props);

const emits = defineEmits(["adjustBar", "onScroll"]);

const { statrTime, endTime }: State = (() => {
  return {
    statrTime: dayjs(date.value).format("YYYY-MM-DD"),
    endTime: dayjs(date.value).add(3, "day").format("YYYY-MM-DD"),
  };
})();

const dayCount = computed<number>(() => {
  return dayjs(endTime).diff(dayjs(statrTime), "day");
});

const right_body = ref<HTMLElement>();

let ticking = false;
function onScroll() {
  if (!ticking) {
    window.requestAnimationFrame(function () {
      emits("onScroll", right_body.value?.scrollTop);
      ticking = false;
    });
    ticking = true;
  }
}

watch(
  () => scrollTop.value,
  (now) => {
    right_body.value?.scrollTo({ top: now });
  }
);

const now = ref<string>();
const time = ref<string>();

onMounted(() => {
  setInterval(() => {
    now.value = formatDate("YYYY-MM-DD HH:mm:ss");
    time.value = formatDate("HH:mm:ss");
  }, 1000);
});

const left = computed(() => {
  const seconds = dayjs(now.value).diff(dayjs(statrTime));
  return seconds / 60 / 60 / 1000 - 1;
});

function onDrop(event: DragEvent) {
  event.preventDefault();
  const target = event.target as HTMLElement;

  const barId = event.dataTransfer?.getData("bar-id");

  const { id: tabulationId } = target.dataset;

  emits("adjustBar", { barId, tabulationId });
}
</script>

<template>
  <div class="app_right" :style="{ '--width': dayCount * 24 * 81 + 10 + 'px' }">
    <div class="app_right-timeline">
      <div class="app_right-timeline-day">
        <div
          v-for="(item, index) in Array.from({ length: dayCount })"
          :style="{ '--dayWidth': 24 * 81 - 1 + 'px' }"
        >
          {{ dayjs(statrTime).add(index, "day").format("YYYY-MM-DD") }}
        </div>
      </div>
      <div class="app_right-timeline-hour">
        <div v-for="(item, index) in Array.from({ length: dayCount * 24 })">
          {{ index % 24 }}
        </div>
      </div>
    </div>

    <div ref="right_body" class="app_right-tabulation" @scroll="onScroll">
      <div
        class="app_right-tabulation-items"
        v-for="item in data"
        :data-id="item.id"
        @dragover.stop.prevent
        @drop="onDrop"
      >
        <div
          v-for="(it, index) in Array.from({ length: dayCount * 24 })"
          :data-id="item.id"
        ></div>
        <ClientOnly>
          <AppBar v-for="bar in item.bars" :date="date" :info="bar"></AppBar>
        </ClientOnly>
      </div>
    </div>

    <div
      class="app_right-time-line"
      :style="{
        '--left': left * 82 + 'px',
        '--height': data.length * 30 + 62 + 'px',
      }"
    >
      {{ time }}
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@app/assets/custom.scss";

.app_right {
  width: 100%;
  max-height: calc(100% - 20px);
  margin: 10px 10px 10px 0;
  background-color: $bg;
  overflow-x: auto;
  overflow-y: hidden;
  position: relative;
  padding: 10px 0 0 0;
}

.app_right-timeline {
  width: var(--width);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.app_right-timeline-day {
  display: flex;

  & > div {
    @include default-grid(var(--dayWidth));
    padding: 5px 0;

    &:last-child {
      border-right: 1px solid $border-color;
    }
  }
}

.app_right-timeline-hour {
  width: 100%;
  display: flex;
  flex-direction: row;
  height: calc(100% - 20px);
  background-color: #fff;

  & > div {
    @include default-grid;

    &:last-child {
      border-right: 1px solid $border-color;
    }
  }
}

.app_right-tabulation {
  width: var(--width);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: calc(100% - 60px);
  margin-bottom: 10px;
}
.app_right-tabulation-items {
  width: calc(100% - 2px);
  display: flex;
  flex-direction: row;

  max-height: calc(100% - 20px);
  background-color: #fff;
  position: relative;

  border-right: 1px solid $border-color;

  &:hover {
    background-color: $bg-h-color;
  }

  &:last-child {
    border-bottom: 1px solid $border-color;
  }

  & > div:not(.app_bar) {
    @include default-grid;
    flex-shrink: 0;
    &:last-child {
      border-right: 1px solid $border-color;
    }
  }
}

.app_right-time-line {
  width: 70px;
  text-align: center;
  position: absolute;
  top: 0;
  left: var(--left);
  height: 20px;
  max-height: 100%;
  color: red;
  background-color: #ffafaf00;
  z-index: 1;
  &::before {
    height: var(--height);
    width: 1px;
    background-color: red;
    content: "";
    position: absolute;
    right: 0;
  }
}
</style>
