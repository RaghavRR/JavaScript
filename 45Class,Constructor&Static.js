
// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai","chai@google.com", "123");
// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());



// behind the scene
// function User(username, email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }
// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }
// User.prototype.changeUserName = function(){
//     return `${this.username.toUpperCase()}`
// }

// const tea = new User("tea","tea@google.com", "123");
// console.log(tea.encryptPassword());
// console.log(tea.changeUserName());


// **********************************Inheritance******************
// class User {
//     constructor(username){
//         this.username = username;

//     }
//     logMe(){
//         console.log(`User name is ${this.username}`);
//     }
// }

// class Teacher extends User{
//     constructor(username,email,password){
//         super(username);
//         this.email = email;
//         this.password = password;

//     }

//     addCourse(){
//         console.log(`New Course was added by ${this.username}`);
//     }
// }

// const chai = new Teacher("chai", "chai@gami.com", "123");
// chai.addCourse();

// const masalaChai = new User("masalaChai");
// masalaChai.logMe();

// console.log(chai instanceof Teacher);
// console.log(chai instanceof User);




// *********************************Static Properties*********************
class User {
    constructor(userName){
        this.userName = userName
    }
    logMe(){
        console.log(`Username :${this.userName}`);
    }
    
    static createId(){  //is id ko access krne s rook deta h.
        return `123`;
    }
}

const raghav = new User("Ragahv");
// console.log(raghav.createId());

class Teacher extends User {
    constructor(username,email){
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "i@phone.com");
iphone.logMe();
// console.log(createId()); --> gives a error pls it is a static in nature ki data jayga nhi...