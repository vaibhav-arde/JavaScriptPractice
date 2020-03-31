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
console.log("add first element in array using .unshift()");
var unshiftManipulation = [["VaibhaV", 32], ["Chandu", 31], ["Prasad", 30]];
console.log(unshiftManipulation);
unshiftManipulation[1].unshift("EcoTech", ".net");
console.log(unshiftManipulation);
unshiftManipulation.unshift(["Company", "Technology", "name", "Age"]);
console.log(unshiftManipulation);


// use of delete on array
let fruits = ['Lemon', 'Banana', 'Cherry']
delete fruits[1];
console.log(fruits);

fruits[1] = 'Orange'
console.log(fruits);

// Remove elements from x index total n elements
let x =1;
let n = 2
fruits.splice(x, n);
console.log(fruits);

// Add x elements, remove n elemets 
x = 2, n = 0
fruits.splice(x, n, 'Orange', 'Cherry');
console.log(fruits);

x = 0, n = 2
let citrusFruits = fruits.splice(x, n);
console.log(citrusFruits);

// Concat array

let evenNumbers = [2, 4, 6]
let oddNumbers = [1, 3, 5]
let primeNumbers = [2, 3, 5]

let numbers = evenNumbers.concat(oddNumbers)
console.log(numbers);

numbers = evenNumbers.concat(oddNumbers, primeNumbers)
console.log(numbers);