// Dates
let myDate = new Date();
console.log(myDate);  //2024-02-19T15:55:06.288Z
console.log(myDate.toString()); // Mon Feb 19 2024 21:25:06 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());  // Mon Feb 19 2024
console.log(myDate.toISOString());   // 2024-02-19T15:55:06.288Z
console.log(myDate.toJSON());  // 2024-02-19T15:55:06.288Z
console.log(myDate.toLocaleDateString());  // 19/2/2024
console.log(myDate.toLocaleString());  // 19/2/2024, 9:25:06 pm
console.log(myDate.toLocaleTimeString());  // 9:25:06 pm

console.log(typeof myDate); //object


// jab single digit me likhte ho toh month 0 se shuru hote h aur agr double digit se shuru krte h toh 01 se shuru hote h  

// let myCreatedDate = new Date(2024, 0, 23);
// let myCreatedDate = new Date(2024, 0, 23,5,3);
// let myCreatedDate = new Date("2023-01-14");
let myCreatedDate = new Date("01-14-2023");
console.log(myCreatedDate.toLocaleString());


// Time Stamp (poll,quizes)
let myTimeStamp = Date.now();
console.log(myTimeStamp); //ye 1708359039929 mili second niklega jb se js bani the aur ham isse campare kr skte h jiski time stamp niklana h
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); //INTERVIEW QUESTION ye miili second ko sec me convert krna h toh 

let newDate = new Date();
console.log(newDate.getMonth()); //jan->0, feb->2
console.log(newDate.getDay()); //sun->0 , mon->1



// something new...!!
newDate.toLocaleString('default',{
    weekday: "long",
})











