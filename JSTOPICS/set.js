let set = new Set([1, 1, 1, 3, 3, 5, 6, 7, 8]);
const newSet = Array.from(set);
console.log("new set", newSet);

set.add(10);
set.delete(6);

console.log(set.has(1));
console.log(set.size);

console.log(set);

const myArray = [1, 2, 3, 4, 5, 5, 6, 7, 7];

const unique = [...new Set(myArray)];

console.log("unique", unique);
