function myIsInString(haystack, needle) {
    var found = false;

    for (var i = 0; i <= haystack.length - needle.length; i++) {
        var substring = haystack.substr(i, needle.length);

        if (substring === needle) {
            found = true;
            break; 
        }
    }

    return found;
}


var inputHaystack = "Hello, World!";
var inputNeedle = "World";
var result = myIsInString(inputHaystack, inputNeedle);
console.log(result); 
