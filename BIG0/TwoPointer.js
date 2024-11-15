function sumFind(array) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let sum = array[left] + array[right];
    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumFind([-4, 0, 1, 2, 3, 4]));
