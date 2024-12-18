/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let s = "";
  let fq = {};
  for (let i = 0; i < chars.length; i++) {
    fq[chars[i]] = (fq[chars[i]] || 0) + 1;
  }

  for (let ele in fq) {
    if (fq[ele] > 1) {
      s += ele;
      s += fq[ele];
    } else {
      s += ele;
    }
  }

  chars.length = 0;
  for (let ele of s) {
    chars.push(ele);
  }
  return chars;
};

const ans = compress(["a", "a", "b", "b", "c", "c", "c"]);
console.log(ans);
