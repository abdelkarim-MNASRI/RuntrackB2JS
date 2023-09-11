function myCountChar(haystack, needle) {
    var count = 0;
    var needleLength = needle.length;
    
    for (var i = 0; i <= haystack.length - needleLength; i++) {
        var substring = haystack.substr(i, needleLength);
        
        if (substring === needle) {
            count++;
        }
    }

    return count;
}

var inputHaystack = "Hello, World! Hello, Universe!";
var inputNeedle = "Hello";

var result = myCountChar(inputHaystack, inputNeedle);
console.log(result); // Affiche le nombre d'occurrences de "Hello" dans la chaîne
