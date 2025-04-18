//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// Stack(Primitive) , Heap (Non-Primitive)
let myname="Sarthak"
let myfullname= myname
myfullname="Sarthak gupta"
console.log(myname);
console.log(myfullname);

let userone={
    id:1234,
    name:"Arun",
    age:25
}
let  usertwo=userone;
usertwo.name="Rahul"
userone.id=4321

console.log(userone);
console.log(usertwo);