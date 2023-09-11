function myArraySum(array) {
var sum = 0;

for (var i = 0; i < array.length; i++) {
    sum += array[i];
}
return sum;
}
var exampleArray = [4, 24, 52, 14, 32,56];
var result = myArraySum(exampleArray);

 console.log(result);
myArraySum([4, 24, 52, 14, 32, 56]) ===182;




