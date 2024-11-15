const maxSubSum = (arr, k) => {
  let max = -Infinity;

  for (let i = 0; i < arr.length - k + 1; i++) {
    let sum = 0;
    for (let j = 0; j < k; j++) {
      sum += arr[i] + arr[j];
    }

    max = Math.max(max, sum);
  }

  return max;
};

console.log(maxSubSum([1, 2, 5, 2, 8, 1, 5], 2));
