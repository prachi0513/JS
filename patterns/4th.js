const pattern = (n) => {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(i.toString());
    }
    console.log();
  }
};

pattern(5);

// output -
// 1
// 22
// 333
// 4444
// 55555