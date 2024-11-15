function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  if (str1.length !== str2.length) return false;

  let frq1 = {};

  for (let char of str1) {
    frq1[char] = (frq1[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!frq1[char]) {
      return false;
    } else {
      frq1[char] -= 1;
    }
  }

  return true;
}
console.log(validAnagram("icce", "ciie"));
