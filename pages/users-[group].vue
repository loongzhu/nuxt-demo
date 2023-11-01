<script setup lang="ts" name="users-[group]">
const route = useRoute();
const router = useRouter();

const group = ref(route.params.group);
const id = ref(route.params.id);

const Go = () => {
  router.push(`/users-${group.value}/${id.value}`);
};

const newLink = computed(() => {
  return `/users-${group.value}/${id.value}`;
});
</script>

<template>
  <div>
    <h3>this: pages/users-[group]</h3>
    <div>
      group: <input input v-model="group" type="text" /> id:
      <input input v-model="id" type="text" />
      <button button @click="Go">Go!</button>

      <span>
        newLink: <NuxtLink :to="newLink">{{ newLink }}</NuxtLink>
      </span>
    </div>

    <h3>users-{{ route.params.group }}</h3>
    <NuxtPage></NuxtPage>
  </div>
</template>

<style scoped lang="scss"></style>
