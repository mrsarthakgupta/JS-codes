// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Sarthak",                        // String key with string value
    "full name": "Sarthak Gupta",           // Key with space (must be accessed with ["full name"])
    [mySym]: "mykey1",                      // Symbol key → must be used in [] format when accessing
    age: 18,                                // Number value
    location: "Jaipur",                     // String value
    email: "Sarthak@google.com",            // Email property
    isLoggedIn: false,                      // Boolean value
    lastLoginDays: ["Monday", "Saturday"]   // Array value
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "Sarthak@chatgpt.com"
// Object.freeze(JsUser)                   // After freeze, no updates or additions are allowed
JsUser.email = "Sarthak@microsoft.com"
// console.log(JsUser);

// Adding a method to the object (function as a property)
JsUser.greeting = function(){                               
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);       // `this` refers to the object itself (i.e., JsUser)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());