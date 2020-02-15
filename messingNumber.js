// function to fined missing numbers in array

const missingNumber = (arr) => {
	arr.sort((a, b) => a - b); // sort numbers
	const missingNumbers = [];
	for (let i = arr[0]; i <= [...arr].pop(); i++) { // loop form first array element to last array element
		if(!arr.includes(i)) { //check if array includes the number if not push ut in messingNumbers
			missingNumbers.push(i);
		}
	}
	return missingNumbers;
};



console.log(missingNumber([6,3,4,1,8,12])); // expected result [ 2, 5, 7 ]


// [...arr].pop() to get last number in array we can use also arr[arr.length -1]