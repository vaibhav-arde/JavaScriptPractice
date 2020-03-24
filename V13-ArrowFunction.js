// Anonymous(function without name) function can be converted into arrow function
// function and return keywords are removed.
// Entire function is written in one line.

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1,2],[3,4,5]));
// Higher order arrow functions
// Arrow functions are good with higher order arrow functions such as Math, Reduce and filter as they take functions as arguments for processing collection of data
// whenever function use another function as argument, its good time for arrow function

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squareIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x*x);
    return squareIntegers
};

const squareIntegers = squareList(realNumberArray);
console.log(squareIntegers);
