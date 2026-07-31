function outer () {
    let clouser = 7
    return function (){
        clouser++
        return clouser
    }
}
let increment = outer ()
console.log(increment());
console.log(increment());
console.log(increment());
