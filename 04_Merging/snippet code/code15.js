function mergeObjects(o1, o2) {
  return { ...o1, ...o2 };
}
console.log(mergeObjects({ a: 1 }, { b: 2 }));
