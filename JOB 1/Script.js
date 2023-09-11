var uppercaseString = '';
var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

for (var i = 0; i < inputString.length; i++) {
    var currentChar = inputString.charAt(i);
    var isLowerCase = lowercaseLetters.indexOf(currentChar) !== -1;

    if (isLowerCase) {
        var lowercaseIndex = lowercaseLetters.indexOf(currentChar);
        uppercaseString += uppercaseLetters.charAt(lowercaseIndex);
    } else {
        uppercaseString += currentChar;
    }
}

return uppercaseString;


var input = "Hello, World!";
var result = myUpperCase(input);
console.log(result);