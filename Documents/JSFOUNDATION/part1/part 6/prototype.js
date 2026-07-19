let computer = {cpu: 12}
let lenovo = {display: "HD",
    __proto__: computer
}
let hp = {
    __proto__: lenovo
}

//console.log(computer);
//console.log(`computer`,computer.__proto__);
//console.log(`lenovo`,lenovo.__proto__);
//console.log(`hp`,hp.__proto__);

let genericCar = {tyre: 4}
let tesla = {driver: "AI",
    __proto__: genericCar
}

console.log(`tesla`,tesla.__proto__);



