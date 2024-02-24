function calculatorCarPrice(val1, val2, ...num1){ //rest Operator -> aagr bhut saare aurgument ho toh ye ek array me baar deta h.
    return num1;
}

console.log((calculatorCarPrice(200,13,11,211)));



// Object with Function
const user = {
    username: "Raghav",
    price: "199"
}
function handleObject(anyobject){
    console.log(`User name is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user);
handleObject({
    username: "Ajay",
    price: "200"
});


// Array with Function
const myNewArr = [200,400,100,500];
function returnSecondValue(getArray){
    return getArray[2];
}
// console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([200,133,231]));

