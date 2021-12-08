//Your task is to write a function that takes a string and return a new string with all vowels removed.

function disemvowel(str) {

    let vowels = {
        'i': true,
        'e': true,
        'o': true,
        'O': true,
        'u': true,
        'a': true,
        'I': true,
        'E': true,
        'A': true,
        'U': true,
    };

    let result = "";

    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        if (!vowels[letter]) {
            result += str[i];
        }
    }
    return result;
};
