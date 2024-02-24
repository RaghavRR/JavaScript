const score = 300;
console.log(score);

const balance = new Number(100);
// console.log(balance);
// console.log(balance.toString());
// console.log(typeof balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const anotherNumber = 23.8966;  //123.89->124  1123.89->1.12e+3
console.log(anotherNumber.toPrecision(3)); //23.9

const hundreds = 1000000;
console.log(hundreds.toLocaleString());  //commas laga k aate h US me 
console.log(hundreds.toLocaleString('en-IN'));  //commas laga k aate h Insia me 


// *******************************MATHS************************************

console.log(Math);

console.log(Math.abs(-5)); //negative value postive ho jate h, positive positve he rhegta h 
console.log(Math.round(4.3)); //round off kr deta h
console.log(Math.ceil(4.3)); //round off kr deta h upper vali value
console.log(Math.floor(4.9)); //round off kr deta h lower vali value
console.log(Math.min(3,4,1,4)); //min. value mil jaygi
console.log(Math.max(3,4,1,4)); //max. value mil jaygi


// ye random vaha use kr skte h jha game bnte h jase dice game jisme 1-6 tk value chayiye hote h aur bhi bhut application h.
console.log(Math.random());  //value hamesha 0 aur 1 ke beech me aaygi
console.log((Math.random()*10) + 1);  //value hamesha 1 aur 9 ke beech me aaygi . add 1 isliye kra kyuki value 0 bhi skte h toh 1 add kra
console.log(Math.floor(Math.random()*10) + 1); //round off kr deta h lower value tk


const min = 10;
const max = 20;
// ye formula 10 aur 20 k beech me he dega ans
console.log(Math.floor(Math.random() * (max - min + 1)) + min);  //learn this formula