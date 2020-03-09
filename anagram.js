// // function to remove spicial chars and sort string and compare between to strings

const cleanStr = (str) => { // to remove spicial chars and make string lowerCase
	return str.replace(/[^\w]|_/g, '')
		.toLowerCase()
		.split('')
		.sort()
		.join('');
};
const anagram = (firestStr, secondStr) => { // to compare between to strings 
	return cleanStr(firestStr) === cleanStr(secondStr);
};


console.log(anagram('hussin', 'ns_?uh&si'));


// another way compare between to strings

const anagram2 = (str, str2) => { // to remove spicial chars and make string lowerCase
	const s1 = str.replace(/[^\w]|_/g, '').toLowerCase().split('').sort().join('');
	const s2 = str2.replace(/[^\w]|_/g, '').toLowerCase().split('').sort().join('');
	return s1 == s2;
};

console.log(anagram2('hussin', 'ns_?uh%si'));