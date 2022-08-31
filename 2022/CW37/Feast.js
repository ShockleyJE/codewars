function feast(beast, dish) {
  let first = beast.charAt(0) === dish.charAt(0) ? true : false;
  let last =
    beast.charAt(beast.length - 1) === dish.charAt(dish.length - 1)
      ? true
      : false;
  //your function here
  let res = true;
  if (first && last) {
    res = true;
  } else {
    res = false;
  }
  return res;
}
