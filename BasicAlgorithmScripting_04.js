function findLongestWordLength(str) {
  let wordsArr = str.split(" ");
  let maxlenght = 0;


  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i].length > maxlenght) {
      maxlenght = wordsArr[i].length;
     
     
    }
    
  }
 
  return maxlenght;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
