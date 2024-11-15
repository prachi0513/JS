var merge = function (nums1, m, nums2, n) {
  if (n === 0) return nums1;

  let j = 0;

  for (let i = m; i < nums1.length; i++) {
    if (j < n) {
      nums1[i] = nums2[j];
      j++;
    }
  }

  nums1.sort((a, b) => a - b);
  console.log(nums1);
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
