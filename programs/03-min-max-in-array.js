const arr = [8, 55, 4, 42, 65, 70, 30];
// let min = arr[0];
// let max = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (min > arr[i + 1]) {
//     min = arr[i + 1];
//   }

//   if (max < arr[i + 1]) {
//     max = arr[i + 1];
//   }
// }

// console.log(min, max);

function maxNumber(arr) {
  return arr.reduce((acc, cur) => (acc > cur ? acc : cur));
}

console.log(maxNumber(arr));

function minNumber(arr) {
  return arr.reduce((acc, cur) => (acc < cur ? acc : cur));
}

console.log(minNumber(arr));
