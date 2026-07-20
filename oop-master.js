function Car () {
    this.make = "Toyota";
    this.model = "Safari";
    this.year = 2018;
    this.start = function () {
        return `${this.make} car is started in ${this.year}`;
    }
}
let myCar = new Car();
console.log(myCar.start());

function Person (name,age) {
    this.name = name;
    this.age = age;
}
let john = new Person ("John",22)
console.log(john);

function Animal (type) {
    this.type = type
}

Animal.prototype.speak = function () {
    return `${this.type} is a type of animal .`
}
Array.prototype.aman = function () {
    return `Custom made ${this}`
}
let myArray = [1,2,3]
console.log(myArray.aman());

let myNewArray = [1,2,3,4,5,6]
console.log(myNewArray.aman());

let animal = new Animal ("Dog")
console.log(animal.speck)

class Vehicle {
    constructor(make,model) {
        this.make = make;
        this.model = model;
    }
    start (){
        return `${this.model} is a car from ${this.make}`
    }
}
class car extends Vehicle {
    drive () {
        return `${this.make} : This is an inheritance example .`
    }
}
let mycar = new car ("Toyota", "Collera")
console.log(mycar.start());
console.log(mycar.drive());

