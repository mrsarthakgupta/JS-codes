const user = {
    username: "Sarthak",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

//user.welcomeMessage()
//user.username = "sam"
//user.welcomeMessage()

//console.log(this);

//chai()

// const chai = function () {
//     let username = "Sarthak"
//     console.log(this.username);      //undefined (this refers to global, which has no 'username')
// }

const chai =  () => {
    let username = "Sarthak"
    console.log(this);                  // {} in Node.js (inherits from global scope)
}

// chai()

// const addTwo = (num1, num2) => {                               //1.Standard arrow function
//     return num1 + num2
// }

// const addTwo = num1, num2 =>  num1 + num2                    //2.One-liner arrow function

//const addTwo = (num1, num2) => ( num1 + num2 )                  //3.Using parentheses

const addTwo = (num1, num2) => ({username: "hitesh"})             //4.Returning an object – must wrap with parentheses


console.log(addTwo(3, 4))


const myArray = [2, 5, 3, 7, 8]

// myArray.forEach((item) => {
//     console.log(item * 2);                                         // Outputs each item multiplied by 2
// });


