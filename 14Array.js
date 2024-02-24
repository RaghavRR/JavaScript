// ARRAY
// array in js make shallow copy(change krunga toh original array me bhi changes hoga)
const myArr = [0,1,2,3,4,5,true,"Raghav"];
const myHeroes = ["shaktiman","naagraj"];
const myArr2 = new Array(1,2,3,4,5);

console.log(myArr[4]);


// Array Methods
myArr.push(6);
myArr.push(7); //add element from last
myArr.pop(); //remove element from last


myArr.unshift(5); //add new element in begining. opitimisation nhi h kyuki ye sb element ko +1 index kr deta h 
myArr.shift(); //remove first element 

console.log(myArr.includes(7));  //arr me 7 h kya nhi ye batna h aur iska datatype boolean type hota h 
console.log(myArr.indexOf(6)); // 6 konse index pr h

console.log(myArr);


const newArr = myArr.join() //add all element of an array into the string.
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);


// slice and splice (INTERVIEW QUESTION)
// splice k aander s slice k part nikl jata h aur baacha part print ho jata h it is a differnce btw 
console.log("A",myArr);
const myn1 = myArr.slice(1,3);  //slice
console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3); //splice
console.log("C",myArr);
console.log(myn2);




