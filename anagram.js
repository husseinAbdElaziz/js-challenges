// function to remove spicial chars and sort string and compare between to strings

const cleanStr = (str) => { // to remove spicial chars and make string lowerCase
	return str.replace(/[^\w]|_/g, '')
	.toLowerCase()
	.split('')
	.sort()
	.join('');
};
const  anagram = (firestStr, secondStr) => { // to compare between to strings 
	return cleanStr(firestStr) === cleanStr(secondStr);
};


console.log(anagram('hussin', 'ns_?uhsi'));