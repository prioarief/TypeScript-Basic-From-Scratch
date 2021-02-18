abstract class Vehicle{
    abstract wheels:number;

    start():void{
        console.log('mberrrrrr')
    }
}


class Car extends Vehicle{
    wheels = 4
}

class Motorcycle extends Vehicle{
    wheels = 2
}

const car = new Car()
car.start()
console.log(car.wheels)

const motor = new Motorcycle()
motor.start()
console.log(motor.wheels)

