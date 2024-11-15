// const subArray = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     let subArray = [];
//     for (let j = i; j < arr.length; j++) {
//       subArray.push(arr[j]);
//       console.log(subArray);
//     }
//   }
// };

// subArray([1, 2, 3, 4, 5, 6]);

//find maximum length of subArray where sum <= k
let maxlength = 0;

let slidingWindow = (arr, k) => {
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum = sum + arr[j];

      if (sum > k) {
        break;
      }

      if (sum <= k) {
        maxlength = Math.max(maxlength, j - i + 1);
      }
    }
  }

  return maxlength;
};

console.log(slidingWindow([2, 5, 1, 7, 10], 14));
