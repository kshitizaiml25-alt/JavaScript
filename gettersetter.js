// ** GETTER AND SETTER  ** //

class Employee {
    constructor(name,salary) {
        this.name = name;
        this._salary = salary;
    }
    get salary (){
        return `Salary is invalid...`
    }
    set salary (value){
        if (salary < 0) {
            console.log("Salary is not in negative");
            
        }
        else {
            this._salary = value;
        }
    }
}
let emp = new Employee("Alice",50000)
console.log(emp.salary);
