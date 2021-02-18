function filter(predicateFn, array) {
  if (length(array) === 0) return [];
  const firstItem = array[0];
  const filteredFirst = predicateFn(firstItem) ? [firstItem] : [];
  return concat(filteredFirst, filter(predicateFn, array.slice(1));
}
