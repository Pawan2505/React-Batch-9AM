let base = [1, 2];
let extra = true ? [3] : [];
let final = [...base, ...extra];
console.log(final);
