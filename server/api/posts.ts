export default defineEventHandler((event) => {
  const arr = Array.from({ length: 10 }, (_, i) => i + 1);
  return arr;
});
