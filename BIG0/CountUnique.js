function countUnique(arr) {
  if (arr.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

console.log(countUnique([1, 2, 33, 4, 555, 56, 5, 2]));

console.log([1, 2, 33, 4, 555, 56, 5, 2].sort);
