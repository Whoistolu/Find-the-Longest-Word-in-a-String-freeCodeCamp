function findLongestWordLength(str) {
    return str.split(" ").sort(function(a, b) {return b.length - a.length})[0];

    // let words = str.split(" ");
    // let longestWord = "";
    // for (var word of words);
    // if (word.length > longestWord.length) {
    //     longestWord = word;
    // }
    // return longestWord.length;
  }
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));