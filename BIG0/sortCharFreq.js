var frequencySort = function (s) {
  if (s.length === 0) return false;

  let fCount = {};
  let resultString = "";

  for (let char of s) {
    fCount[char] = (fCount[char] || 0) + 1;
  }

  // entries = [["t", 1], ["r", 1], ["e", 2]]
  const copyObje = { ...fCount };

  while (Object.keys(copyObje).length > 0) {
    // Step 1: Find the maximum entry
    const maxEntry = Object.entries(copyObje).reduce((max, current) => {
      return current[1] >= max[1] ? current : max; // Keep the max entry found
    });

    const [maxKey, maxValue] = maxEntry; // Get the key of the max entry

    for (let i = 0; i < maxValue; i++) {
      resultString += maxKey;
    }

    // Step 2: Delete the maximum entry from the copy object
    delete copyObje[maxKey];

    // Log the current state of the objects
    console.log(copyObje, "Current State", fCount);
  }

  return resultString;
};

console.log(frequencySort("future")); // "eert" //"eetr"
