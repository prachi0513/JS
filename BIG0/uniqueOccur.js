var uniqueOccurrences = function (arr) {
  if (arr.length === 0) return false;

  let frq = {};
  let checkNum = new Set();

  for (let ele of arr) {
    frq[ele] = (frq[ele] || 0) + 1;
  }
  console.log(frq);

  for (let ele in frq) {
    if (checkNum.has(frq[ele])) {
      return false;
    } else {
      checkNum.add(frq[ele]);
    }
  }
  console.log(checkNum);
  return true;
};

console.log(
  uniqueOccurrences([
    26, 2, 16, 16, 5, 5, 26, 2, 5, 20, 20, 5, 2, 20, 2, 2, 20, 2, 16, 20, 16,
    17, 16, 2, 16, 20, 26, 16,
  ])
);
