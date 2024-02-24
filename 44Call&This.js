function setUserName(userName){
    // complex DB call
    this.userName = userName;

}

function createUser(userName, email, password){
    setUserName.call(this, userName);

    this.email = email;
    this.password = password;

}

const chai = new createUser("chai", "chai@google", "123");
console.log(chai);