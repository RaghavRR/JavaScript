// destructuring of an object -- destructuring krne k bdd value lene hogi usse hame brr brr itna bada naam nhi likhna hoga
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Raghav Rastogi"
}

// course.courseInstructor

const {courseInstructor: cInst} = course  //ye syntax hota h
console.log(cInst); //hame course.courseInstructor nhi likhna paade brr brr toh hamne usko destructure kr diya aur ham cInst se bhula rhe 


// **********************JSON********************************************

// JSON ko object m change kr dengye fir Object se key , value nikl lengye by fetch method. is tharah API k ander value milte h
// JSON(API) --->> OBJECT -->> KEY,VALUE


/*{
    "name": "Raghav",
    "coursename": "js in hindi",
    "price": "free" 
}*/


// API kabhi kabhi array of object ki form me bhi milte h. toh ham array k upper loop lga skte h fir object k ander ek ek value le skta hu.
[
    {

    },
    {

    },
    {

    }
]