export default fromNodeMiddleware((req, res, next) => {
  console.log("Legacy middleware");
  next();
});
