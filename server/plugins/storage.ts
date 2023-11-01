import fs from "fs";
import fsDriver from "unstorage/drivers/fs";

/**
 * Use fs driver for storage
 * @see https://nuxt.com/docs/guide/directory-structure/server#advanced-usage
 * @see https://unstorage.unjs.io/drivers/fs
 */
export default defineNitroPlugin(async () => {
  const storage = useStorage();

  // Create temp directory
  await fs.mkdirSync("./temp", { recursive: true });

  // Dynamically pass in credentials from runtime configuration, or other sources
  const driver = fsDriver({
    base: "./temp",
  });

  // Mount driver
  storage.mount("fs", driver);
});
