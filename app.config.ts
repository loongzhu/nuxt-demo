/**
 * @see https://nuxt.com/docs/guide/directory-structure/app-config
 */

export default defineAppConfig({
  foo: "bar",
  theme: {
    primaryColor: "#ababab",
  },

  // Overwrite default array value by using a merger function
  array: () => ["bonjour"],
});
