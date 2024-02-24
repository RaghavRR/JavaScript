
// console.log(Math.PI);

// *********************INTERVIEW Q***********************************
// descriptor property object k baare me kuch hidden chizzo k baare me batate h
const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);

const chai = {
    name : 'glinger chai',
    price :250,
    isAvailable: true,

    orderChai : function(){
        console.log('Chai nhi bni');
    }
}
// jo ye mene object bnaya h chai uski  hidien property dekha deta hai.
console.log(Object.getOwnPropertyDescriptor(chai, "name"));


// jo mene object bnaya h vo mene he khud code likha h toh uski hidden property ko me change kr skta h with the help of definteproperty.
// Object.defineProperty(chai, 'name', {
//     writable : false,
//     enumerable : false
// })

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {  //ye object.entries isliyle kra h kyuki hame object ko iterable bnana h.
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }

    
}

