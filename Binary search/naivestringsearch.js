const searchString = (long, small) => {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < small.length; j++) {
      if (small[j] !== long[i + j]) break;
      if (j === small.length - 1) count++;
    }
  }

  return count;
};

const ans = searchString("hello world", "hello");
console.log(ans);
