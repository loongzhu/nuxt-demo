import fs from "node:fs";

export default defineEventHandler(async () => {
  // Doing something with nuxtApp
  console.log("Hello from my plugin! I will loading as 01.");

  const raw = await fs.readFileSync("package.json", "utf-8");

  const data = JSON.parse(raw);

  return data;
});
