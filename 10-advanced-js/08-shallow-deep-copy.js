// ******* shallow copy ********
const obj1 = {
  firstName: "virat",
};

// 1. Object.assign
// const obj2 = Object.assign({}, obj1);
// obj1.firstName = "Sachin";
// console.log(obj1, obj2);

// 2. Spread operator
// const obj2 = { ...obj1 };
// obj1.firstName = "mahi";
// console.log(obj1, obj2);

// ****** Deep copy ********
const obj = {
  firstName: "virat",
  address: {
    street: "main road",
    pinCode: 43526,
    city: {
      name: "delhi",
    },
  },
  main: function () {},
};

// JSON.stringify / parse
const deepCopy = JSON.parse(JSON.stringify(obj));
obj.address.city.name = "mumbai";
console.log(obj, deepCopy);

// if inside object, key is function then JSON.stringify() ignores this method, does not stringify it. so thats why we use another solution is loadash library deepCopy method
