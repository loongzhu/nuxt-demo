export const useFoo = () => {
  return useState("foo", () => "bar");
};

// It will be available as useFoo() (camelCase of file name without extension)
// export default function () {
//   return useState("foo", () => "bar");
// }
