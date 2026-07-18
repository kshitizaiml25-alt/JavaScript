/* Writa a function named 'makeTea' that takes one parameter , `typeOfTea`, and return a string like `"MakingGreenTea"` when called with `"green tea"`.
Store the result in a variable named `teaOrder`.
*/

function makeTea (typeOfTea) {
    return `Making` + ` ${typeOfTea}`
}
let teaOrder = makeTea("green tea")
console.log(teaOrder);

/*
2. Create a function named `orderTea` that takes one parameter, `teaType`. Inside this function, creates another function named `confirmOrder` that returns a message like `"Order Confirmed For Chai"`.
Call `confirmOrder` from within `orderTea` and returns the result.
*/

function orderTea (teaType) {
    function confirmOrder () {
        return `Order Confirmed for chai`;
    }
    return confirmOrder();
}
let teasOrder = orderTea("chai")
console.log(teasOrder);

/*
3. Write an arrow function named calculateTotal that takes two parameters: price and quantity. The function should return the total cost by multiplying the price and quantity.
Store the result in a variable named totalCost.
*/

const calculateTotal = (price, quantity) => {
    return price * quantity;
}
let totalCost = calculateTotal(7, 100)
console.log(totalCost);

/*
Write a function named `processTeaOrder` that takes another function, `makeTea` , as a parameter and calls it with the argument `"earl grey"`.
Return the result of calling `makeTea`.
*/
function processTeaOrder (makeTea) {
    return makeTea("earl grey")
}
let teaOrder1 = processTeaOrder(makeTea)
console.log(teaOrder1);

/*
Write a function named `createTeaMaker` that returns another function. The inner function should take a parameter `teaType` and return a string like `"Making green Tea"` when called.
Store the returned function in a variable named `teaMaker` and call it with the argument `"green tea"`.
*/

function createTeaMaker () {
    function teaType (teaType) {
    return `Making ${teaType}`;
    }
    return teaType
}
let teaMaker = createTeaMaker()
console.log(teaMaker("green Tea"));
