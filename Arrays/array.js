let arr = [1, 2, 3, 4, 5];

const addElement = (arr, k, pos) => {
  //arr [1,2,3,4,5]
  //k = 10 input to add in array
  //pos  2 input to add in array

  for (let i = arr.length - 1; i >= pos; i--) {
    arr[i + 1] = arr[i];
  }
  arr[pos] = k;
  //console.log(arr);
};
addElement(arr, 10, 2);

const deleteElement = (arr, index) => {
  //[1,2,10,3,4,5]

  for (let i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length = arr.length - 1;
  console.log(arr);
};

deleteElement(arr, 2);
