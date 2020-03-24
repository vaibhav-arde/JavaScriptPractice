//condition ? statement-if-true : statement-if-false;

function oddEven(num){
    // console.log(num%2 ==0 ? `${num} is Even number` : `${num} is Odd number`);
    return num%2 ==0 ? `${num} is Even number` : `${num} is Odd number`;
}

for (let i=0; i<10; i++){
    console.log(oddEven(i));
}

function checkSign(num){
    return num > 0 ? `${oddEven(num)}` : num < 0 ? `${num} is Negative number` : `${num} is Zero`;
}

for (let i= -2; i<8; i++){
    console.log(checkSign(i));
}