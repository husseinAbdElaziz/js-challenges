// function to return missing numbers from array
const ar = [5, 3, 2, 8, 5];

const sortArr = (arr) => {
  let missingNum = [];
  arr.sort((a, b) => a - b);
  for (let x = 0; x < arr.length; x++) {
    let subtractResult = arr[x + 1] - arr[x];
    if (subtractResult > 1) {
      for (let y = 1; y < subtractResult; y++) {
        missingNum.push(arr[x] + y);
      }
    }
  }
  return missingNum;
};

console.log(sortArr(ar)); // result wil be [4, 6, 7]


// second sulotion

const sortArrWithFind = (arr) => {
  let missingNum = [];
  arr.sort((a, b) => a - b);
  for (let x = arr[0]; x <= arr[arr.length - 1]; x++) {
    if (!arr.find(num => num === x)) {
      missingNum.push(x);
    }
  }
  return missingNum;
};

console.log(sortArrWithFind(ar));