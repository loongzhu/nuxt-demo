/**
 * Add global route middleware
 * @file middleware/route.global.ts
 * @description Global route middleware
 * @module middleware/route.global
 * @see https://nuxt.com/docs/guide/directory-structure/middleware#middleware-order
 */

export default defineNuxtRouteMiddleware((to, from) => {
  const date = formatDate("HH:mm:ss");
  const log = `[${date}] [route]: from "${from.path}" to "${to.path}"`;
  console.log(log);
});
