class Car{
    carName(name){
        this.name = name;
    }

    startEngine(){
        console.log(`${this.name}'s engine has started.`)
    }

    stopEngine(){
        console.log(`${this.name}'s engine stopped.`)
    }

}

class Toyota extends Car{
    topSpeed(speed){
        console.log(`${this.name}'s top speed is ${speed}.`)
    }
}

let myCar = new Toyota();

myCar.carName('Camry');
myCar.startEngine();
myCar.topSpeed(200);
myCar.stopEngine();
