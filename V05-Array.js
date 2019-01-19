var sampleArray = ["VaibhaV", "Chandu", "Prasad"];

console.log(sampleArray);

//Nested array
var nestedArray = [["VaibhaV", "Wipro"], ["Chandu", "EcoTech"], ["Prasad"]];
console.log(nestedArray);

//Array value using indices
var valueByIndices = sampleArray[0];
console.log(valueByIndices);

var nestedByIndices = nestedArray[0];
console.log(nestedByIndices);
console.log(nestedByIndices[0]);

//Modify array values
//nestedArray[2]="updated Prasad";
console.log(nestedArray);

//Get vale form Multidimentional array
var companyChandu= nestedArray[1][1];
console.log(companyChandu);

//Add values or array to an array using .push ()
nestedArray.push("Sheetal", "TCS");
nestedArray.push(["Sheetal", "TCS"]);
console.log(nestedArray);
nestedArray[2].push("XYZ");
console.log(nestedArray);

//remove last elemnet of an array using .pop()
var arrayManipulation = [["Vaibhav", 32], ["Chandu", 31], ["Prasad", 30, "rough"], ["XYZ", "rough", 33]];
console.log(arrayManipulation);
var arrayPop = arrayManipulation[2].pop();
console.log(arrayManipulation);
console.log(arrayPop);
arrayPop = arrayManipulation.pop();
console.log(arrayManipulation);
console.log(arrayPop);

//remove first elemnet of an array using .shift()
console.log("remove first elemnet of an array using .shift()");
var popManipulation = [["rough", "XYZ",  33],["VaibhaV", 32], ["Chandu", 31], ["rough", "Prasad", 30]];
console.log(popManipulation);
var arrayPush = popManipulation[2].shift(123);
console.log(popManipulation);
console.log(arrayPush);
arrayPush = popManipulation.shift();
console.log(popManipulation);
console.log(arrayPush)

//add first element in array using .unshift()
console.log("remove first elemnet of an array using .shift()");
var unshiftManipulation = [["VaibhaV", 32], ["Chandu", 31], ["Prasad", 30]];
console.log(unshiftManipulation);
unshiftManipulation[1].unshift("EcoTech", ".net");
console.log(unshiftManipulation);
unshiftManipulation.unshift(["Company", "Technology", "name", "Age"]);
console.log(unshiftManipulation);
