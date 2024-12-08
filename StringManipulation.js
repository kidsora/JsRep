function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
function countCharacters(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count++;
  }
  return count;
}
function capitalizeFirstLetter(sentence) {
  let result = "";
  if (sentence.length > 0) {
    result += String.fromCharCode(sentence.charCodeAt(0) - 32); // hedhi masrou9a
  }
  for (let i = 1; i < sentence.length; i++) {
    result += sentence[i];
  }
  return result;
}
