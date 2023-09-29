import { format } from "date-fns";

const defaultDateFormat = "yyyy-MM-dd";

export function formatDate(value: Date, dateFormat: string = defaultDateFormat): string {
  return format(value, dateFormat);
}
