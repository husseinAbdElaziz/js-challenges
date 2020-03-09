// // function to find duplicated Nums
const firstDuplicatedNum = (arr) => {
    duplicatedObj = {}; // all array elements and duplicaed times
    duplicatedNums = []; // duplicated numbers from array input
    for (const num of arr) {
        !duplicatedObj[num] ? duplicatedObj[num] = 1 : duplicatedObj[num]++;
    }
    for (const num in duplicatedObj) {
        duplicatedObj[num] > 1 ? duplicatedNums.push(+num) : null;
    }

    return duplicatedNums;
};

console.log(firstDuplicatedNum([1, 2, 3, 3, 4, 2, 5])); // expected result is 2



// another way to find duplicated Nums
const allDuplicateNum = (arr) => {
    arr.sort((a,b) => a-b); //to sort array
    const duplicatedObj = {}; // all array elements and duplicaed times
    const duplicatedNums = [];
    for (const num of arr) {

        if (!duplicatedObj[num]) {
            duplicatedObj[num] = 1;
        } else {
            duplicatedNums.push(num);
        }
    }
    return duplicatedNums;
};

console.log(allDuplicateNum([1, 2, 3, 3, 4, 2, 5, 5])); // expected result is 2