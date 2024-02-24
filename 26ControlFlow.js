// if

// <,>,<=,>=,!=,==,===(ye datatype ko check kr leta h) , !==(ye -ve sign check kr leta h)

const score = 200;
if (score > 100) {
  const power = "fly";
  console.log(`User Power: ${power}`);
}

// console.log(`User Power: ${power}`);  //Error..!! becz power ki scope aandr h

const balance = 1000;
// implicit scope
if (balance > 500) console.log("test");

// not implicit scope
if (balance < 500) {
  console.log("Less than 500");
} else if (balance < 750) {
  console.log("Less than 750");
} else if (balance < 900) {
  console.log("Less than 900");
} else {
  console.log("less than 1200");
}

const userLoggedIn = true;
const debitCard = true;
const LoggedInFromGoogle = false;
const LoggedInFromGmail = true;
if (userLoggedIn && debitCard && LoggedInFromGoogle) {
  console.log("Allowed to buy courses");
}

if (LoggedInFromGmail || LoggedInFromGoogle) {
  console.log("User LoggedIn");
}

// switch syntax :-
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

const month = 3;
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("Feb");
    break;
  case 3:
    console.log("March");
    break;

  default:
    console.log("Default case match");
    break;
}


const Month = "jan";
switch (Month) {
  case "jan":
    console.log("January");
    break;
  case "feb":
    console.log("Feb");
    break;
  case "march":
    console.log("March");
    break;

  default:
    console.log("Default case match");
    break;
}




// Truthy  
const userEmail = [];
if (userEmail) {
    console.log("Got User Email");
} else{
    console.log("Don't have user Email");
}

// falsy value :- kin kin value ko false assume krte h
// 1)false
// 2)0
// 3)-0 (INTERVIEW Q)
// 4)BigInt 0n 
// 5) ""
// 6)null
// 7)undefined
// 8)NaN

// inke aalawa sb truthy value mante h like:-
// 1) "0"
// 2) "false"
// 3) " "
// 4) []
// 5) {}
// 6) function(){}



 // array ko detect kr skte h ki array empty h ya nhi
if(userEmail.length === 0){
    console.log("Array is empty");
}


// object ko detect kr skte h ki object empty h ya nhi
const emptyobj = {};
if(Object.keys(emptyobj).length === 0){
    console.log("Object is Empty");
}


// *********************Imp. Points*********************************
// false == 0; --> true
// false == '' --> true
// 0 == '' --> true



// **********Nullish Coalescing Operator?? : null undefined***************

// hamare pass database se direct responce nhi milta h. hame two value milte h toh chances h ki null value aa jay ya indefined value aa jay.
// toh us cases k liy ye banaya h
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 15; //first value ko de deta h


console.log(val1);

// ******************Terniary Operator****************************** */
// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");