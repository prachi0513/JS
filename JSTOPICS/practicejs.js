// const add = (a) => {
//   return function b(b) {
//     return function c(c) {
//       return a + b + c;
//     };
//   };
// };

// console.log(add(1)(1)(1));

function x() {
  return 5;
}

let a = function (b) {
  return 5;
};

console.log(x());
console.log(a());
