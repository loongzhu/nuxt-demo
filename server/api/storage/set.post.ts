export default defineEventHandler(async (event) => {
  const { key, value } = await readBody(event);
  console.log("🚀 ~ event:", event);

  // Set a key with
  const storage = useStorage("fs");
  await storage.setItem(key, value);

  return {};
});
