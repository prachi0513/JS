const pattern = (n) => {
  for (let i = 1; i <= n; i++) {
    for (j = n; j >= i; j--) {
      process.stdout.write(" * ");
    }
    console.log();
  }
};

pattern(5);

// o/p
// *  *  *  *  *
//  *  *  *  *
//  *  *  *
//  *  *
//  *
