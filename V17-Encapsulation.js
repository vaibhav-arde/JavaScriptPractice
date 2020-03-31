class Employee{
    setDetails(name, id, phoneNo){
        this.name = name;
        this.id =id;
        this.phoneNo = phoneNo;
    }

    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getPhoneNo(){
        return this.phoneNo;
    }
}

let emp1 = new Employee();

emp1.setDetails('VaibhaV', 1000, 9876543210)
console.log(emp1.getName());
console.log(emp1.getId());
console.log(emp1.getPhoneNo());
