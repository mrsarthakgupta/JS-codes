const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);                                            //this refers to the object that is calling the function.
    }

}



console.log(user.username);
console.log(user.getUserDetails());
console.log(this);                           //Outside the object (global scope):Refers to window (browser) or {} (Node.js)



//---------------------Constructor Function-------------------
//A constructor is a special function used to create multiple similar objects with the same structure (properties and methods).It acts like a blueprint for creating objects.

function User(name, age) {
  this.name = name;       // this.name becomes a property of the object
  this.age = age;

  this.sayHello = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  };
  return this; // Returning 'this' is optional, but it allows for method chaining if needed.
}

// Creating objects using the constructor
const user1 = new User("Sarthak", 21);                    //new is used to create a new object from a constructor and bind this to that new object.
const user2 = new User("Ankit", 25);

// Using methods
user1.sayHello(); // Hello, my name is Sarthak and I am 21 years old.
user2.sayHello(); // Hello, my name is Ankit and I am 25 years old.



//🔥 Bonus: Constructor Using Class Syntax (ES6)---------------------------
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const u1 = new User("Sarthak", 21);
u1.sayHello(); // Hi, I'm Sarthak
