export default defineEventHandler(async (event) => {
  const storage = useStorage("fs");

  storage.clear();

  return {};
});
