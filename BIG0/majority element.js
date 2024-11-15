var majorityElement = function (nums) {
  if (nums.length === 0) return null;
  let frq = {};

  let max = 0;
  let finalkey = 0;

  for (let ele of nums) {
    frq[ele] = (frq[ele] || 0) + 1;
  }

  console.log(frq);

  for (let key in frq) {
    if (frq[key] > max) {
      max = frq[key];
      finalkey = Number(key);
    }
  }

  return finalkey;
};

console.log(majorityElement([2, 3, 4, 4, 4, 5]));
