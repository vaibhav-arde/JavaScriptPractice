function randomNumber(){
    return Math.floor(Math.random() * 10);
}
function generate1to10RandomNumbers(){
    for (let i=0; i<10; i++){
        console.log(`Random Number is : ${randomNumber()}`);
    }
}
generate1to10RandomNumbers();

function randomRange(min, max){
    for (let i=0; i<10; i++){
        console.log(`Random number between ${min} and ${max} is: ${ Math.floor(Math.random() * (max - min + 1)) + min}`);
    }
}
randomRange(1, 50);
