const name = "Raghav";
const repoCount = 9;

// console.log(name + " " + repoCount);

console.log(`Hello My name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('Raghav-RR');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('g'));


// substring me negaitve value nhi de skte h but slice me de skte h 
const newString =  gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newString1 = "        Raghav      ";
console.log(newString1);
console.log(newString1.trim());

const url = "https://raghav.com/raghav%20rastogi";
console.log(url.replace('%20','-'));

console.log(url.includes('raghav'));
console.log(url.includes('Manav'));

console.log(gameName.split('-'));