let myName = "VaibhaV";

console.log(myName.length);

console.log(myName[0]); //V
myName[0] ='B';// Strings are Immutable
console.log(myName[0]); //V is expected not B

//Secondlast letter of myName
console.log(myName[myName.length-2]);

function fullName(firstName, middleName, lastName){
    let result ="";
    result += `My full name is "${firstName} ${middleName} ${lastName}".`
    return result;
}

console.log(fullName("VaibhaV", "Bandopant", "Arde"));
