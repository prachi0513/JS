/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (nums.length === 0) return [-1, -1];
  let result = [-1, -1];
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) {
      let start = mid;
      if (nums[mid - 1] === target) {
        start--;
      }
      let end = mid;
      if (nums[mid + 1] === target) {
        end++;
      }

      result = [start, end];
      break;
    }

    if (nums[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return result;
};
