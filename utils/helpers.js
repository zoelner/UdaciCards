export function toArray(obj) {
  return obj === null ? [] : Object.keys(obj).map(key => obj[key]);
}

export const COLOR_BLACK = "#000000";
export const COLOR_WHITE = "#FFFFFF";
export const COLOR_GRAY = "#333333";
