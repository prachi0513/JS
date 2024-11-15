const countUnique = (arr) => {
  if (arr.length === 0) return 0;

  let i = 0;

  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
};

console.log(countUnique([1, 2, 3, 4, 4, 4, 4]));
