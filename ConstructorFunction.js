function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Car(make, model) {
  this.make = make;
  this.model = model;
}

let myCar = new Car("Toyota", "Kia");
console.log(myCar);

let myNewCar = new Car("Mahindra", "Safari");
console.log(myNewCar);

function Tea(type) {
  this.type = type;
  this.describe = function Tea(type) {
    return `This is a Cup of ${this.type}`;
  };
}
let lemontea = new Tea("Lemon tea");
console.log(lemontea.describe());

function Drink(name) {
  if (!new.target) {
    throw new Error("Drink must be called with the new keyword");
  }
  this.name = name;
}
let tea = new Drink("tea");
let coffee = Drink("coffee");
