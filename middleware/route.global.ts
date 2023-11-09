/**
 * Add global route middleware
 * @file middleware/route.global.ts
 * @description Global route middleware
 * @module middleware/route.global
 * @see https://nuxt.com/docs/guide/directory-structure/middleware#middleware-order
 */

import { consola } from "consola";
import { colors } from "consola/utils";

export default defineNuxtRouteMiddleware((to, from) => {
  const date = formatDate("HH:mm:ss");
  consola.info(
    colors.green(`[${date}] route`),
    `from "${from.path}" to "${to.path}"`
  );
});
