// Default value of a parameter
console.log(`======Default value of a parameter======`);
const increament =(num, value =1) => num+value;

console.log(increament(5,2));
console.log(increament(5));

const sum = (function(){
    return function sum(...args){
        return args.reduce((a,b)=> a + b, 0);
    };
})();

console.log(`Sum of all numbers is :${sum(1,2,3,4)}`);

const sumArgs = (...args) => args.reduce((a,b) => a+b,0);
console.log(`Sum of all args is :${sum(1,2,3,4)}`);
console.log(`Sum of all args is :${sum(1)}`);
console.log(`Sum of all args is :${sum()}`);

// Spread operate
const arr1 = ["JAN", "FEB", "MAR", "APR"];
let arr2;
(function(){
    //arr2 = arr1 //, this will only point to same value
    arr2 = [...arr1];//this is required to copy value's of arr1 to arr2
    arr1[0]="potato";
})();
console.log(arr2);
console.log(arr1);

//Destructing assignment
console.log(`=====Destructing assignment=====`);
const days= {"JAN":31, "FEB":28, "MAR":31, "APR":30}
//oldStyle is as below:
var jd = days.JAN;
var fd = days.FEB;
var md = days.MAR;
var ad = days.APR;
//using destructing 
const {JAN : jd1, FEB : fd1, MAR : md1, APR : ad1}= days;
console.log(`${jd}, ${fd}, ${md}, ${ad}`);
console.log(`${jd1}, ${fd1}, ${md1}, ${ad1}`);

const LOCAL_FORECAST = {
    today : { min : 11 , max : 15 },
    tomorrow : { min : 10, max : 20}
}

function getMaxofTomo(forecast){
    var {tomorrow :{max : maxofTomo}} = forecast;
    return maxofTomo;
}
console.log(`Max of tomorrow is : ${getMaxofTomo(LOCAL_FORECAST)}`);

//Create an Object:
const createPerson = (name, age, gender) => ({name, age, gender});
console.log(createPerson("VaibhaV", 32, 'Male'));
