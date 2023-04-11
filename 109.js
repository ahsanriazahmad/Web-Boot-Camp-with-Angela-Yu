var TypedSentence = prompt("Type a sentence");
var sentenceLength = TypedSentence.length;
console.log(sentenceLength);
var totalCharacters = 240;
var remainingCharacters = sentenceLength - totalCharacters;

console.log("You have typed " + sentenceLength + " your remaining total of characters are " + remainingCharacters);