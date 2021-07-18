function spinWords(str) {
    var arr = str.split('');
    var finalStr = '';

    for (var i = 0; i < arr.length; i++) {
        var word = arr[i];
        if (word.length < 5) {
            finalStr += word + ' ';
        } else {
            for (var letter = word.length - 1; letter >= 0; letter--) {
                finalStr += word[letter];
            }
            finalStr += ' ';
        }
    }
    return finalStr.slice(0, finalStr.length - 1);
}
spinWords('hussein abd elaziz');
