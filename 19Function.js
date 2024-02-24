function sayMyname(){
    console.log("R");
    console.log("A");
    console.log("G");
    console.log("H");
    console.log("A");
    console.log("V");
}
// sayMyname   //reference hota h
// sayMyname();  //excute hota h 


// function addtwoNumber(num1, num2){ //parameter
//     console.log(num1 + num2);
// }

function addtwoNumber(num1, num2){ 
    // let result = num1 + num2;
    // return result;
    return num1 + num2;
    console.log("Raghav");  //return k bdd koi kaam nhi krega function
}

const result = addtwoNumber(3,4);  //arguments
console.log("Result: ",result);


function logInUserMessage(username){
    if(!username ){  //username === undefined
        console.log("Pls enter a username");
        return;
    }
    return `${username} just logged in`;
}
logInUserMessage("Raghav"); //function n value toh return kr de but print nhi kra kyuki hamne kisse variable me store nhi kra h
console.log(logInUserMessage("Raghav"));
console.log(logInUserMessage());  //(INTERVIEW Q)jb koi value he pass nhi kare h toh undefined aata h 