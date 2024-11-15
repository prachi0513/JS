const obj = {
  name: "test",
  obj2: {
    name: "test2",
  },
};

const copy = JSON.parse(JSON.stringify(obj));

copy.obj2.name = "hello world";

console.log(obj);

const original = {
  name: "Alice",
  age: 25,
  hobbies: ["reading", "hiking"],
  address: {
    city: "New York",
    zip: "10001",
  },
};

const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.hobbies[0] = "wdw";
console.log(original);

console.log(deepCopy);
