const scoreMap = new Map();
scoreMap.set(1, "Low");
scoreMap.set(2, "Medium");
scoreMap.set(3, "High");

for (let [key, value] of scoreMap) {
  console.log(key, value);
}
