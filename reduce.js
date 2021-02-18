function reduce(reducerFn, initialValue, array) {
  if (length(array) === 0) return initialValue;
  const newInitialValue = reducerFn(initialValue, array[0]);
  return reduce(reducerFn, newInitialValue, tail(array));
}
