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