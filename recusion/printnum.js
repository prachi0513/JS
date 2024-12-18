const printNum = (n) => {
  if (n <= 0) {
    console.log("Done !!");
    return;
  }
  console.log(n);
  n--;
  printNum(n);
};

printNum(3);

console.log([1, 2, 3, 4, 5].slice(1));

promise.then((data) => {
  console.log(data);
});

promise.then(function (data) {
  console.log(data);
});
