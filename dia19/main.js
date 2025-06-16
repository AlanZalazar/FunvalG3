let a = [1, 2, 3];
let b = ["a", "b", "c"];
let ab = [];

for (let i = 0; i < a.length; i++) {
  let [n, l] = [a[i], b[i]];
  ab.push(n, l);
}

console.log(ab);
