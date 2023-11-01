export default defineEventHandler((event) => {
  const name: string = getRouterParam(event, "name");

  return `Hello, ${name}!`;
});
