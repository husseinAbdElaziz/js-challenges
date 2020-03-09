// function to get the numbers from array that equlas target

let arr = [7, 2, 11, 15];

let twoSum = (nums, target) => {
  const previousValues = {};
  for (let i of nums) {
    const neededValue = target - i;
    const index2 = previousValues[neededValue];
    if (index2 != null) {
      return {
        indexes: [nums.indexOf(index2), nums.indexOf(i)],
        values: [index2, i]
      };
    } else {
      previousValues[i] = i;
    }
  }
};
console.log(twoSum(arr, 9));
