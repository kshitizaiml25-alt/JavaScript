//**  ABSTRACTION  **//

class CoffeeMachine {
    start (){
    // call DB
    //filter value
    return `starting the machine...`
    }
    brewCoffee (){
        //complex Calculation
        return `brewing coffee..`
    }
    pressstartbutton () {
        let msgone = this.start()
        let msgtwo = this.brewCoffee()
        return `${msgone} + ${msgtwo}`
    }
}
let myMachine = new CoffeeMachine();
//console.log(myMachine.start());
//console.log(myMachine.brewCoffee());
console.log(myMachine.pressstartbutton());

// **POLYMORPHISM** //

class Bird {
    fly (){
        return `Birds can fly...`
    }
}
class Penguin{
    fly(){
        return `Penguin can't fly...`
    }
}
let bird = new Bird()
let penguin = new Penguin()
console.log(bird.fly());
console.log(penguin.fly());

//**STATIC METHOD  **//

class Calculator {
    static add (a,b){
        return a+b;
    }
}
console.log(Calculator.add(2,3));
//let minicalc = new Calculator()
//console.log(minicalc.add(2,3));

