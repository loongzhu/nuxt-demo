/**
 * @see https://nuxt.com/docs/guide/directory-structure/plugins#providing-helpers
 */
export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello: (msg: string) => `Hello ${msg}!`,
    },
  };
});
