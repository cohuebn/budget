import { isNullOrUndefined } from "@budget/core";

export function lazyLoad<T>(getValue: () => T) {
  let value: T;
  return () => {
    if (isNullOrUndefined(value)) {
      value = getValue();
    }
    return value;
  };
}
