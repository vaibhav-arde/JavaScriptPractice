let EmpDetails = function(name, age){
    this.name = name;
    this.age = age;
};

EmpDetails.prototype.getName = ()=> this.name;

EmpDetails.prototype.getAge = ()=>{
    return this.age;
};

let emp1 = new EmpDetails('VaibhaV', 32);
let emp2 = new EmpDetails('Sheetal', 31);

console.log(emp1.name);
console.log(emp2.age);