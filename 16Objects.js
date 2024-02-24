// object literals --> singleton nhi hoga
// constructer -->> singleton banega


// object literals
const mySym = Symbol("key1");

const JsUser = {  //ye NON SINGLETON object h
    name: "Raghav",
    age: 19,
    location: "Rampur",
    "full name": "Raghav Rastogi",
    [mySym] : "mykey1",  //INTERVIEW QUESTION
    email: "raghav@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Sunday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "raghav@google.com"; //update the object

// Object.freeze(JsUser) //hame freeze kr diya matlb ki ham isme change nhi kr paygye 
JsUser.email = "raghav@chatgbt.com";  //ye email change nhi hogi aab kyuki hamne freeze kr diya tha
console.log(JsUser);  




JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greeting2());