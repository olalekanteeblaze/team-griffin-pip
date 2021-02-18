function map(fn, array) {
  if (length(array) === 0) return [];
  return [fn(array[0])].concat(map(fn, array.slice(1)));
}
