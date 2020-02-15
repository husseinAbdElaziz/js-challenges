
// const chunk = (arr, size) => {
// 	const chunked = []; // array holds chunked numbers arrays

// 	for(const n of arr) { // loop throw array and get every element in array
// 		const lastChunk = chunked[chunked.length -1]; // to get last element in  chunked array
// 		if (!chunked.length || lastChunk.length === size) { // 
// 			chunked.push([n]);
// 		} else {
// 			lastChunk.push(n);
// 		}
// 	}
// 	return chunked;
// };

const arr = [1,2,3,4,5,6,7,8,9];
// console.log(chunk(arr, 3));
// chunk(arr, 2)


const chunk = (arr, size) => {
	const chunked = [];
	for(let i = 0; i < arr.length ; i+=size) {
		chunked.push(arr.slice(i, i+size));
	}
	return chunked;
};

console.log(chunk(arr, 2)); // expected result [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9 ] ]
