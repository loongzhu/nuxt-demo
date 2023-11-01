/**
 * set the `parallel` option to `true` to enable parallelization
 * @see https://nuxt.com/docs/guide/directory-structure/plugins#loading-strategy
 */
export default defineNuxtPlugin({
  name: "my-plugin",
  parallel: true,
  async setup(nuxtApp) {
    // the next plugin will be executed immediately
    console.log("Hello from hello-parallel.ts!");
  },
});
