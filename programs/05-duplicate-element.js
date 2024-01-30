const arr = [1, 2, 8, 2, 9, 8];

function duplicateElement(arr) {
  return arr.filter((el, i, arr) => {
    return arr.indexOf(el) !== i;
  });
}

console.log(duplicateElement(arr));
