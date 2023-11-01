export default defineEventHandler(async (event) => {
  const params = getRouterParams(event);

  const storage = useStorage("fs");

  const value = await storage.getItem(params.key);

  return value;
});
