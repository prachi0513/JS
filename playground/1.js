// console.log([12] + { id: 1 });
// console.log(isNaN("abc"));
// console.log(Number.isNaN("abc"));
// console.log(1 + 2 + "3"); //33
// console.log(1 + "2" + 3); //123
// console.log([1] + [22]);
const emps = [
  { id: 1, name: "vijay" },
  { id: 2, name: "Ayush" },
  { id: 3, name: "vijay" },
  { id: 1, name: "vijay" },
  { id: 2, name: "Ayush" },
  { id: 3, name: "vijay" },
];

let myset = {};

let unique = emps.filter((item) => {
  if (myset[item.id]) {
    return false;
  }
  myset[item.id] = true;
  return true;
});

console.log(myset);
console.log(unique);
