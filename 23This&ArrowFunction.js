
//************************************THIS********************************** */
const user = {
    username: "Raghav",
    price: "999",

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);  //this -->> current contest ko access krega
        console.log(this);
    }

}

user.welcomeMessage();  //Raghav, welcome to website
user.username = "Manav"; 
user.welcomeMessage();  // ye contest(value) change this ki help se hua h.. Manav, welcome to website


// this ki value broswer m window aate h but in node {} aate h.
console.log(this);


//***************************************Arrow Function*************** */
// function chai(){
//     let username = "Raghav";
//     console.log(this.username); //undefined.. ye this object me he chalta h na ki function me
// }
// chai();


// const chai = function() {
//     let username = "Raghav";
//     console.log(this.username);  //undefined.. same rsn.
// }
// chai();



const chai = () => {
    let username = "Raghav";
    console.log(this);  
}
// chai();


// explict retrun arrow function. (curlly bracket lagana he lagana h aur curlly bracket lga rhe ho toh return bhi lgana h)
const addtwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addtwo(3,4));


// implicte return arrow func.   (curlly bracket hata dete h aur return ko bhi)
// curlly bracket me likha toh return likhna hoga aagr circle bracket me likha toh return nhi usse krna hoga
const addTwo = (num1, num2) => num1 + num2;
const addTWo = (num1, num2) => (num1 + num2);
console.log(addTwo(3,4));
console.log(addTWo(3,4));


// object return krna h toh circle barcket lagne he honge
const addTWO = (num1, num2) => ({username: "Raghav", price: "999"});
console.log(addTWO());


// arrow func. in loop

// const myArr = [2,5,3,2,1];
// myArr.forEach(function () => {

// })