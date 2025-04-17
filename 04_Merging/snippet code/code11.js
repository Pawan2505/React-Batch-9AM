let defaultSettings = { theme: "light", fontSize: 14 };
let userSettings = { fontSize: 18 };
let finalSettings = { ...defaultSettings, ...userSettings };
console.log(finalSettings); 
