// to capitalize param string and assign it to var
const str = 'hussein abd elaziz';
const capitalizedTextRegex = (str) =>
  str.replace(/\b[a-z]/gi, (cahr) => cahr.toUpperCase());
console.log(capitalizedTextRegex(str));
// result :- Hussein Abd Elaziz

// another way using map and split
const capitalizedTextMap = (str) =>
  str
    .toLowerCase()
    .split(' ')
    .map((i) => i[0].toUpperCase() + i.substr(1))
    .join(' ');
console.log(capitalizedTextMap(str));
// result :- Hussein Abd Elaziz
