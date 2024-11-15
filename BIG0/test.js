let obj = {
  1: 3,
  2: 7,
  3: 8,
};

Object.keys(obj).map((ele) => {
  return console.log(ele, obj[ele]);
});
