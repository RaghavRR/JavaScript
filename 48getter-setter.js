// me kisse ko password access dena he nhi chalata toh uss case me getter and setter aate h 

   
// *********class me getter and setter (majorly use)*******************
class User {
    constructor(email, password){
        this.email = email,
        this.password = password
    }

    // getter
    get email(){
        return this._email.toUpperCase()
    }
    // setter
    set email(value){
        this._email = value;
    }


    // getter
    get password(){  //Maximum call stack size exceeded
        return `${this._password}raghav`
    }
    // setter
    // phele set krte time error aayga fir ham name change kr dengye setter k toh fir getter me error aayga toh fir uska bhi name change krna hoga.
    set password(value){
        this._password = value;  //Maximum call stack size exceeded --> constructor aur setter me race lg jate h.
    }

}

const raghav = new User("ragh@MediaList.com", "abc");
console.log(raghav.password);
console.log(raghav.email);




// *************************function me getter and setter ********************
function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email);



// *****************object me getter and setter************************
const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);