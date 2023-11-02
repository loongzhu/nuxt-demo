import dayjs from "dayjs";

export const useDate = (format = "YYYY-MM-DD HH:mm:ss") => {
  return dayjs().format(format);
};
