const ransomNote = (noteText, fullText) => {
    const noteArr = noteText.split(' ') ;
    const fullTextArr = fullText.split(' ');

    let fullTextObj = {};

    fullTextArr.forEach(word => {
        if(!fullTextObj[word]) fullTextObj[word] = 0;
        fullTextObj[word]++;
    });

    console.log(fullTextObj);
};



ransomNote('hussein zizo', 'hussein is a zizo brother, thay are egyptians');
