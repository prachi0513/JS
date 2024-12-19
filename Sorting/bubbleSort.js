let arr = [8, 1, 2, 3, 4, 5, 6];

function BubbleSort(arr) {
  let noSwap;
  for (let i = 0; i < arr.length; i++) {
    noSwap = true;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) break;
    console.log("one pass");
  }
  return arr;
}

console.log(BubbleSort(arr));
