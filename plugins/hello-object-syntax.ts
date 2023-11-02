/**
 * Object Syntax Plugins
 * the `parallel` option to `true` to enable parallelization
 * @see https://nuxt.com/docs/guide/directory-structure/plugins#object-syntax-plugins
 * @see https://nuxt.com/docs/guide/directory-structure/plugins#loading-strategy
 */
export default defineNuxtPlugin({
  name: "my-plugin",
  enforce: "pre", // or 'post'
  parallel: true, // default false, the `parallel` option to `true` to enable parallelization
  async setup(nuxtApp) {
    // this is the equivalent of a normal functional plugin
  },
  hooks: {
    // You can directly register Nuxt app runtime hooks here
    "app:created"() {
      const nuxtApp = useNuxtApp();
      //
      console.log("Hello from hello-object-syntax.ts !");
    },
  },
  env: {
    // Set this value to `false` if you don't want the plugin to run when rendering server-only or island components.
    islands: true,
  },
});
