// create the promise
// 1)
const promiseOne = new Promise(function (resolve, reject) {
  // Do and asyncc task
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is complete.");
    resolve();
  }, 1000);
});

// Consumption Promise
promiseOne.then(function () {
  //resolve k connection h then k sath
  console.log("Promise Consumed");
});

// 2)
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task two");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async two resolved");
});

// 3)
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // data pass krna h
    resolve({ username: "Raghav", email: "R@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

// 4)
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Raghav", password: "RR" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

// 5)
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "JS", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

// thode deer wait krta h
// async function ko try and catch block  me krna hoga
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();

// ************IMP Point********************(INTERVIEW Q)
// 404 error hota h vo resolve me aata h na ki reject m jata h... 
// you can imagiane that jo ye 404 error aa rha h vo bhi toh response aata h isliye ye btt likhe h.

// ********************Fetch krte h*******************************

// fetch kr liya link s data ko async ki help se.
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // string ko json me convert krna hoga
        const data = await response.json()
        console.log(data);
    } catch (error) {   
        console.log("E: ", error);
    }
}
// getAllUsers();




// fetch kr liya link s data ko resolve reject ki help se.
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})
