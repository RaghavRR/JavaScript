// ****constructor OR singleton***

// const tinderUser = new Object(); //ye SINGLETON object h (INTERVIEW Q) ye bhi tarika hota h object ko crete krne k

const tinderUser = {} 
tinderUser.id = "123abc"
tinderUser.name = "Raghav"
tinderUser.email = "raghav@amazon.com"
tinderUser.isLoggedIn = false
// console.log(tinderUser);



// object k aander object
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Raghav",
            lastname: "Rastogi"
        }
    }
}

console.log(regularUser.fullname?.userfullname.firstname);



// combination of objects
const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"a", 4:"b"};
// const obj3 = {obj1 , obj2};  //wrong
// const obj3 = Object.assign({}, obj1, obj2); //(ye bhi kaam use krne vale h)yahi syntax hota h learn it..!!
const obj3 = {...obj1, ...obj2}; //ye use krnegye jada
console.log(obj3);




// database se ***Array of Object*** aayga is form me
const users = [
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 1,
        email: "r@gmail.com"
    },
]
console.log(users[1].email);  //array.object ==> array of object



// hamne tinderUser me jo bhi keys the unko le liya aur ye ek arrary me store hote h [ 'id', 'name', 'email', 'isLoggedIn' ] aur ye aage chal k bhut kaam aaygyi
console.log(tinderUser);
console.log(Object.keys(tinderUser)); //[ '123abc', 'Raghav', 'raghav@amazon.com', false ]
console.log(Object.values(tinderUser)); //[ '123abc', 'Raghav', 'raghav@amazon.com', false ]

console.log(Object.entries(tinderUser)); //haar id aur value ko array me daal deta h.
/*[
    [ 'id', '123abc' ],
    [ 'name', 'Raghav' ],
    [ 'email', 'raghav@amazon.com' ],
    [ 'isLoggedIn', false ]
  ]*/ 

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true (ye bata h ki ye value h ya nhi aagr value nhi hote h toh app crash ho skta h )