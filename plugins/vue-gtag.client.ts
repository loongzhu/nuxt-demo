/**
 * @see https://nuxt.com/docs/guide/directory-structure/plugins#vue-plugins
 */

import VueGtag, { trackRouter } from "vue-gtag-next";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: "GA_MEASUREMENT_ID",
    },
  });
  trackRouter(useRouter());
});
