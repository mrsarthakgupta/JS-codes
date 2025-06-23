// ES6

class User {
    constructor(username, email, password){                     //constructor gets called immediately ,when new User() is used 
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User("chai", "chai@gmail.com", "123")          //new is important because it creates a new object, sets this inside the constructor to that object, links it to the prototype, and returns it.

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the scene

function User(username, email, password){                       //This User is a constructor function
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){                    //Methods defined on the prototype are shared across all instances via the prototype chain, saving memory by avoiding duplication.
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){                     //adds property to the prototype of User
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());