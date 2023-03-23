// let myBike = new Object();
// myBike.make = "Suzuki";
// myBike.model = "GsxS1000";

// let myBike2 = {
//     make: "Bmw",
//     model: "M1000RR"
// }

// console.log(myBike.make)

// for (let propname in myBike){
//     console.log(`${propname} :: ${myBike[propname]}`)
// }
//"use strict"
// let obj = {
//     name: "Dave"
// }

// console.log(obj.name)
// console.log(Object.isExtensible(obj))
// obj.age = 42;
// console.log(obj)

// let obj2 = {
//     name:"Bill"
// }

// Object.preventExtensions(obj2)
// obj2.age = 43
// console.log(obj2)

class Vehicle {

    cls = 0;

    constructor (wheels, power) {
        this._wheels = wheels;
        this._power = power;
        this._speed = 0;
        this._reg = cls++;
    }

    accelerate(time) {
        this._speed = this._speed + 0.5* this._power
        return `after ${time} seconds, speed will be ${this._speed} MPH`
    }

    get wheels(){
        return this._wheels;
    }

    set wheels(Wheels){
        this._wheels = Wheels;
    }
}

class Car extends Vehicle {
    constructor (wheels, power, electric){
        super(wheels, power);
        this._electric = electric;
        this._chain = flase;
    }
}

class Motorbike extends Vehicle{
    constructor(wheels, power){
        super(wheels, power)
        this._chain = true
    }
}


// const myCar = new Car(4, 105)
// console.log(myCar)
// const yourCar = new Car(3, 25)
// console.log(yourCar)
// console.log(myCar.accelerate(20))
// console.log(myCar.wheels)
// //myCar.Wheels(56)
// myCar.wheels = 56
// console.log(myCar.wheels)

