


// forof loop seedhe value utha leta h array me
const  arr = [1,2,3,4,5];
for (const num of arr) {
    console.log(num);
}

const greeting = "Hello World!";
for (const greet of greeting) {
    console.log(`Each char is ${greet}`);
}


//Maps --> jis order me print kra h vase he print hongi aur aagr ek key value do brr dengye toh ye ek ko he print kreigi
const map = new Map();
map.set('IN',"India");
map.set('USA',"United State of America");
map.set('Fr',"France");
console.log(map);

// output
// Map(3) {
//     'IN' => 'India',
//     'USA' => 'United State of America',
//     'Fr' => 'France'
//   }



// forof loop in map 
for (const [key, value] of map) {
    console.log(key, ":- ", value);
}  //output-->
// IN :-  India
// USA :-  United State of America
// Fr :-  France



// forof loop object pr work nhi krta h aur ERROR deta h.. toh ham object ke liy forin loop use krte h
const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

// for (const [key,value] of myObject) {
//     // console.log(key, ":- ", value);
// }  //output--> EEROR..



for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}



// forin loop in array
// forin loop me value niklane padhte h --> isse niklate h--> programming[key]
const programming = ["js","rb","py","java","cpp"];
for (const key in programming) {
    console.log(programming[key]);
}



// forin loop in map  -->> no output bez iteration nhi hota h
const map1 = new Map();
map.set('IN',"India");
map.set('USA',"United State of America");
map.set('Fr',"France");

for (const key in map1) {
    console.log(key);
}


/*****************************foreach loop********************/


const coding = ["js", "rb","java","py","cpp"];
// isme callback function lgta h. callback function vo hota h jika naam nhi hota.

// coding.forEach( function (item) {
//     console.log(item);
// })



function printMe(item){
    console.log(item);
}
// coding.forEach(printMe);  //reference dena h bus na ki excecute krna h


coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})
// output
// js 0 [ 'js', 'rb', 'java', 'py', 'cpp' ]
// rb 1 [ 'js', 'rb', 'java', 'py', 'cpp' ]
// java 2 [ 'js', 'rb', 'java', 'py', 'cpp' ]
// py 3 [ 'js', 'rb', 'java', 'py', 'cpp' ]
// cpp 4 [ 'js', 'rb', 'java', 'py', 'cpp' ]





//array of object --> hamare pass database se array of object aata h usme se hame value nikalne hote h toh isse nikl skte h.
const myCoding = [
    {
        languageName: "javascript",
        languagefileName: "js"
    },
    {
        languageName: "java",
        languagefileName: "java"
    },
    {
        languageName: "python",
        languagefileName: "py"
    }
]
myCoding.forEach((item)=>{

    console.log(item.languageName);
})
// output :-
// javascript
// java
// python