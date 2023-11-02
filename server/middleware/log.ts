export default defineEventHandler((event) => {
  const date = useDate("HH:mm:ss");
  console.log(`[${date}] [request]: ${getRequestURL(event)}`);
});
