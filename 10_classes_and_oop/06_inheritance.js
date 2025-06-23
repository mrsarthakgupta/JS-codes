class User {                                                 //parent class
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{                                  //child class or derived class ,It can access everything from User using extends
    constructor(username, email, password){
        super(username)                                     //super(username) call is mandatory to initialize this.username in the parent clas
        this.email = email                                  //super(username) must be used before (this) in a subclass
        this.password = password                            //super(username) in ES6 classes like how we used User.call(this, username) earlier in function-based inheritance
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User);              //checks whether the object chai inherits from the User class anywhere in its prototype chain. 

// chai 
//   → Teacher.prototype 
//       → User.prototype 
//           → Object.prototype 
//               → null