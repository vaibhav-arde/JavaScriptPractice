//While loop
var arr=[];
var i = 0;

while (i < 5){
    arr.push(i);
    i++;
}
console.log(`Array using WHILE loop : ${arr}`);

//For loop:
var forArray =[];

for (var i = 0; i<5; i++){
    forArray.push(i);
}
console.log(`Array using FOR loop : ${forArray}`);

var nestedArray =[[1,2], [3,4], [5,6,7]];
function multiArray(nestedArray){
    var product = 1;
    for(var i=0; i<nestedArray.length; i++){
        for(var j=0; j<nestedArray[i].length; j++){
            product *=nestedArray[i][j];
        }
    }
    return `Product of all numbers in an array: ${nestedArray} is ${product}`;
}
console.log(multiArray(nestedArray));

// DoWhile loop
var doWhilearr=[];
var i = 5;

do{
    doWhilearr.push(i);
    i++;
}while (i < 5)
console.log(`Array using DOWHILE loop : ${doWhilearr}`);

let fruits =['Apple', 'Banana', 'Carrot']

console.log(`========= Example of For in =========`)
let x;
for (x in fruits){
    console.log(`At index ${x} fruit is ${fruits[x]}`)
}

console.log(`========= Example of For of =========`)
let y;
for(y of fruits){
    console.log(`fruit is ${y}`)
}