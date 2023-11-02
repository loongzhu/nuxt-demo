import dayjs from "dayjs";

export default function (format = "YYYY-MM-DD HH:mm:ss") {
  const date = dayjs().format(format);
  return date;
}
