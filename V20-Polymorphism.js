class Animal{
    constructor(name){
        this.name = name;
    }

    intake(){
        console.log(`${this.name} eats food`);
    }
}

class Horse extends Animal{
    intake(){
        super.intake();
        console.log(`${this.name} drinks water`);
    }
}

let H1 = new Horse('Chetak');

H1.intake();
