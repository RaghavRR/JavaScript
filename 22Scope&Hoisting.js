// Nested Scope
function one(){
    const username ="Raghav";

    function two(){
        const website = "Youtube";
        console.log(username);
    }
    // console.log(website);

    two();
}

one();



if (true) {
    const username = "Raghav";
    if (username === "Raghav") {
        const website = " Youtube";
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);



// **************************Intersting******************************


addone(5);  // NO ERROR.. becz hamne kisse variable me store nhi kra h 
function addone(num){
    return num + 1;
}


// Hoisting
addTwo(5);   //ERROR.... becz ye sb pta chlta h ki hamne kase function banya h. jase yha pr hamne function ko variable me store kra h aur hamne phele call kr di isliye ERROR aaya.
const addTwo = function(num){
    return num + 2;
}
