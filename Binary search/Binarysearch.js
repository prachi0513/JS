const binarySearch = (arr, target) => {
  if (arr.length === 0) return -1;

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (target > arr[mid]) {
      mid++;
      left = mid;
    } else {
      mid--;
      right = mid;
    }
  }

  return -1;
};

const ans = binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 7);
console.log(ans);
