// Javascript and Classes

// js me class nhi hote h.
// js object oriented programming language nhi h ye prototype language hai.

// OOP --> style hai code likhne k.

// Object --> collection of properties and method.

// why OOP? -->> code bhut messess ho jata tha toh OOP se sahi lgta h code.


// parts of OOP -> Object literal{}, constructor function, classes, prototype, Instances(new, this).


// 4 pillars. (chatgbt s puchna with example)
// 1) Abstraction --> detalis hide kr lena (fetch)
// 2) Encapsulation --> rappup kr do data ko.
// 3)  Inheritance  --> 
// 4) Polymorphism --> many saaruup


// object literal 
const user = {
    userName : "Raghav",
    logInCount : 8,
    signedIn : true,

    getUserDetails : function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.userName}`);
        console.log(this);
    }
}
console.log(user.userName);
console.log(user.getUserDetails());


// brr brr repeated data ko daalne ko rookne k liy Constructor use krte h
// ye new keywords Constructor function hai. 
// const promiseOne = new Promise()
// const date = new Date()

function User(userName, logInCount, isLoggedIn){
    this.userName = userName;
    this.logInCount = logInCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.userName}`);
    }

    // return this;
}

// aagr ham new keyword nhi use krengye toh data overwrite ho jayga.. isliye ham new Constructor use krna padhta h
// 1) jb bhi new keyword use krte h usse time empty object create hota h.
// 2) Constructor function call hota h new keyword k karan.
// 3) this keyword k ander argument inject hote h.
// 4) function k ander mil jata h.
// Constructor function hame naya copy dedeta h jisse overwrite nhi ho.
const userOne =  new User("Raghav", 12, true)
const userTwo = new User("Manav", 10, false)
// console.log(userOne);
console.log(userOne.constructor);

