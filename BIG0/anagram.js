function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  let frq1 = {};
  let frq2 = {};

  for (let str of str1) {
    if (frq1[str]) {
      frq1[str] += 1;
    } else {
      frq1[str] = 1;
    }
  }

  for (let str of str2) {
    if (frq2[str]) {
      frq2[str] += 1;
    } else {
      frq2[str] = 1;
    }
  }

  for (char in frq1) {
    if (frq1[char] !== frq2[char]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram("", ""));
