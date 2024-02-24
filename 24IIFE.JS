// IIFE -> Immediately Invoked Function Expression 
// IIFE -> jase he function likha vase he immediately Invoked ho jyga.
// IIFE use isliye krte h kyuki global scope k variable se pollution hota h aur ye problems create krte h.

// INTERVIEW QUESTION
// syantax : ()();
// semicolon lagana hoga kyuki IIFE ko end krna h toh
// two IIFE ek sath likhna h toh semicolon ki help se likhna hoga jisse pta chl jay ki first IIFE kha end ho rha h


// named IIFE
(function chai(){
    console.log(`DB- Connected`);
})();


// IIFE arrow func. or unnamed IIFE
( (name) => {
    console.log(`DB-Connected Two ${name}`);
})("Raghav")