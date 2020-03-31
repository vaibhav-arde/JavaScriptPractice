class Employee{
    constructor(name, id){
        this.name = name;
        this.id =id;
    }
}

let emp1 = new Employee('VaibhaV', 1000);
let emp2 = new Employee('Gundya', 1001);

console.log(emp1.name);
console.log(emp1.id);

console.log(emp2.name);
console.log(emp2.id);