function same(arr1, arr2) {
  if (arr1.length != arr2.length) return false;

  let frequancyArr1 = {};
  let frequancyArr2 = {};

  for (ele of arr1) {
    if (frequancyArr1[ele]) {
      frequancyArr1[ele] += 1;
    } else {
      frequancyArr1[ele] = 1;
    }
  }

  for (ele of arr2) {
    if (frequancyArr2[ele]) {
      frequancyArr2[ele] += 1;
    } else {
      frequancyArr2[ele] = 1;
    }
  }

  for (key in frequancyArr1) {
    // 2*2 in frequencyArr2
    if (!(key * key in frequancyArr2)) {
      return false;
    }

    // {'4':2} {'16':2}
    if (frequancyArr2[key * key] !== frequancyArr1[key]) {
      return false;
    }
    return true;
  }
}

console.log(same([1, 4, 4], [1, 1, 16]));
