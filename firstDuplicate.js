// function to find first duplicated Nums
const duplicateNum = (arr) => {
    duplicatedObj = {}; // all array elements and duplicaed times
    duplicatedNums = []; // duplicated numbers from array input
    for(const num of arr) {
        !duplicatedObj[num] ? duplicatedObj[num] = 1 : duplicatedObj[num] ++;
    }
    for(const num in duplicatedObj) {
        duplicatedObj[num] > 1 ? duplicatedNums.push(num) : null;
    }

    return duplicatedNums[0];
};

console.log(duplicateNum([1,2,3,3,4,2,5])); // expected result is 2