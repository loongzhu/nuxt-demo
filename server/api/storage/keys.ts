export default defineEventHandler(async (): string[] => {
  const storage = useStorage("fs");
  const keys: string[] = await storage.getKeys();
  return keys || [];
});
