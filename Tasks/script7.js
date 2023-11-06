const originalString = "I am enjoying my training";
const Substring = originalString.slice(0, 5);
console.log(Substring);

const replacedString = originalString.replace("training", "journey");
console.log(replacedString);

for (let i = 0; i < originalString.length; i++) {
  console.log(originalString.charAt(i));
}


const str = "a,b,c";
const strArray = str.split(',');
console.log(strArray);


const stringWithoutSpaces = " abc ".trim();
console.log(stringWithoutSpaces);


const firstString = "Hello";
const secondString = "World";
const concatenatedString = firstString.concat(" ", secondString);

console.log(concatenatedString);