"use strict";
class Vehicle {
    start() {
        console.log('mberrrrrr');
    }
}
class Car extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 4;
    }
}
class Motorcycle extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 2;
    }
}
const car = new Car();
car.start();
console.log(car.wheels);
const motor = new Motorcycle();
motor.start();
console.log(motor.wheels);
