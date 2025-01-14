export const truncateString = (str, num) => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
};

export const formatCountSubscribed = (str) => {
  if (str.length > 6) {
    return str.slice(0, str.length - 6) + "." + str.slice(0, str.length - 3) + "." + str.slice(str.length - 3, str.length);
  } else if (str.length > 3) {
    return str.slice(0, str.length - 3) + "." + str.slice(str.length - 3, str.length);
  }
};
