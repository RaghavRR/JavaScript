// for

const array = [1,2,34,66,4];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(element == 34){
        console.log("34 is BEST number");
    }
    console.log(element);   
}



for (let i = 0; i <= 10; i++) {
    // console.log(`Outer Loop value ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner Loop value ${j} and Onner loop value ${i}`);
        // console.log(i + "*" + j + " = " + i*j);
        
    }
    
}


let myArray = ["flash", "batman", "superman"];
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}



// break 

for (let index = 1; index <= 20; index++) {
    if(index == 5) {
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is : ${index} `);
    
}


// continue
for (let index = 1; index <= 20; index++) {
    if(index == 5) {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is : ${index} `);
    
}

