// ******* Set ********
const set = new Set([1, 2, 3]);
set.add(4);
set.add(5);
set.add(5);

set.delete(5);
// set.clear();
console.log(set);
console.log(set.size);
console.log(set.has(3));

set.forEach((el) => {
  console.log(el);
});

// array -> set -> array (also remove duplicate items from array)
const arr = ["a", "b", "c", "d", "b", "c", "e", "d", "f"];
console.log(arr);

const arrSet = new Set(arr);
const newArr = [...arrSet];
console.log(newArr);

// ******* Map ********
const map = new Map([
  [1, "one"],
  [2, "two"],
  [true, "good programmer"],
  [false, "bad programmer"],
  [{ a: "a" }, 15],
]);

map.set("king", "kohli");
map.set(2, "two");

console.log(map.get(2));

map.delete(1);
map.delete("ab");

// map.clear();
console.log(map);
console.log(map.has(true));
console.log(map.has(2));
console.log(map.size);

for (let [key, value] of map) {
  console.log(key, value);
}

// ******** WeakSet *********
const ws = new WeakSet();
const obj1 = {
  firstName: "abc",
  age: 20,
};
ws.add(obj1);
console.log(ws);
console.log(ws.has(obj1));

// ******** WeakMap *********
const wm = new WeakMap([[{ username: "xyz" }, 20]]);
const obj2 = {
  firstName: "Rohit",
  age: 20,
};
wm.set(obj2, "login");
console.log(wm);
