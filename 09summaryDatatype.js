// Primitive datatype

// 1) string
// 2) number
// 3) boolean
// 4) null
// 5) undefined
// 6) symbol
// 7) bigint

const score = 100;
const scoreValue = 100.3;

const islogin = false;
const outSideTemp = null;
let userEmail; //undefined

const id = Symbol('123');
const anotherid = Symbol('123');
console.log(id===anotherid);

const bigNumber = 3489344444938n;

// Reference type (Non-Primitive dataype)

// 1) Array
// 2) Objects
// 3) Function

const heros = ["shaktiman", "naagraj","doga"];

let obj = {
    name: "Raghav",
    age: 19,
}

const myFunction = function(){
    console.log("Hello World");
}
myFunction();



console.log(typeof bigNumber);
console.log(typeof myFunction);

//Return type of variable in js
/* number => number
string => string
boolean => boolean
null => object
undefined => undefined
Symbol => Symbol
BigInt => Bigint

Array => object
Function => Function
Object => Object */
