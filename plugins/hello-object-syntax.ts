/**
 * Object Syntax Plugins
 * @see https://nuxt.com/docs/guide/directory-structure/plugins#object-syntax-plugins
 */
export default defineNuxtPlugin({
  name: "my-plugin",
  enforce: "pre", // or 'post'
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
