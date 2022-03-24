Double Char

function doubleChar (str) {
let newWord = ""
for(var i = 0; i < str.length; i++) {
    newWord += str[i]+str[i];
} return newWord;
};