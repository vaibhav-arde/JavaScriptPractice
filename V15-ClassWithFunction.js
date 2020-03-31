class Employee{
    setDetails(name, id){
        this.name = name;
        this.id =id;
    }
}

let emp1 = new Employee();
emp1.setDetails('VaibhaV', 1000);

console.log(emp1.name);
console.log(emp1.id);

let emp2 = new Employee();
emp2.setDetails('Gundya', 1001);

console.log(emp2.name);
console.log(emp2.id);