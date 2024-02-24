const heros = ["thor","Ironman","spiderman"];
const dc_heros = ["superman","flash","batman"];

heros.push(dc_heros); //array ke aander aa jayga.

// console.log(heros);
// console.log(heros[3][1]);

const all_heros = heros.concat(dc_heros); //concat two or more array to give a new array
// console.log(all_heros);

const all_new_heros = [...heros, ...dc_heros];
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);



// convert any datatype to Array 
console.log(Array.isArray("Raghav"));
console.log(Array.from("Raghav"));
console.log(Array.from({name: "Raghav"}));  //(Interisting case) hame key value k array banao ye btna hoga 



// multiply variable ko convert krna h array me
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));

