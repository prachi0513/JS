const LinearSerach = (arr, target) => {
  if (arr.length === 0) return -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return arr[i];
    }
  }

  return -1;
};

const ans = LinearSerach([1, 4, 5, 2, 2], 5);
console.log(ans);
