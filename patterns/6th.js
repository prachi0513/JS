const pattern = (n) => {
  for (let i = 1; i <= n; i++) {
    for (j = 1; j <= n - i + 1; j++) {
      process.stdout.write(j.toString());
    }
    console.log();
  }
};

pattern(5);

// o/p
// 12345
// 1234
// 123
// 12
// 1
