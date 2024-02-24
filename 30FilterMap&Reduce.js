/************************Filter************************ */

// const coding = ["js","ruby","java","python","cpp"];

// // foreach loop value return nhi krta h
// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item;
// })
// console.log(values);  //undefined

// filter me bhi callback function lgta h aur ye value return krta h but foreach me jb callback function use krte h toh value return nhi krta h.
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.filter( (num) => num > 4)
// const newNums = myNums.filter( (num) => {
//     return num > 4;
// })

// aagr foreach se he krna h toh aase krengye.
const newNums = [];
myNums.forEach((nums) => {
  if (nums > 4) {
    newNums.push(nums);
  }
});
console.log(newNums);

// QUESTION:-
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

// const userBooks = books.filter( (bk) => bk.genre === "History");
const userBooks = books.filter((bk) => {
  return bk.publish >= "1995" && bk.genre === "History";
});

console.log(userBooks);

// **********************MAP********************************
// map automatically return krta h value ko.Map sb element ki value deta h but filter me condition hote h. MAP me bhi callback function use hota h
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newnums = myNumbers.map( (num) => num + 10);

// ****************chaining******************************
const newnums = myNumbers
  .map((num) => num * 10) //ye sabhi pr lagega
  .map((num) => num + 1) //ye sabhi pr lagega
  .filter((num) => num >= 40); //jo jo 40 ya 40 k equal hoga vo print ho jyga

console.log(newnums);

// *******************************Reduce*********************
// ye bhi callback function k use krta h.  Mostly ye add krne m kaam aata h.
const mynums = [1, 2, 3];
const myTotal = mynums.reduce((accumulator, currentValue) => {
  console.log(`accumulator: ${accumulator} and cuurntValue: ${currentValue}`);
  return accumulator + currentValue;
}, 0); //ye 0 accumulator ki value h jo initial use hogi aur iska output:- 6.

console.log(myTotal);

const shoppingCard = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "python course",
    price: 19882,
  },
  {
    itemName: "mobile Dev course",
    price: 5999,
  },
  {
    itemName: "webDev course",
    price: 7999,
  },
];

const totalAmount = shoppingCard.reduce((acc, item) => {
  return acc + item.price;
}, 0);
console.log(totalAmount);
