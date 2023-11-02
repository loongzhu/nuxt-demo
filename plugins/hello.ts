/**
 * Using Composables
 * @see https://nuxt.com/docs/guide/directory-structure/plugins#using-composables
 */

export default defineNuxtPlugin((nuxtApp) => {
  // Doing something with foo
  const foo = useFoo();
  console.log("🚀 ~ foo:", foo);

  // If you would like to provide a helper on the NuxtApp instance, return it from the plugin under a provide key.
  return {
    provide: {
      hello: (msg: string) => `Hello ${msg}!`,
    },
  };
});
