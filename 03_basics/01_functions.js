
function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("R");
    console.log("T");
    console.log("H");
    console.log("A");
    console.log("K");
}

//sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    //let result = number1 + number2
    //return result
    return number1 + number2
}

//console.log(`Result: ${addTwoNumbers(3, 5)}`);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){               // Function using rest operator to handle extra values
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))            // Returns all extra values as array

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));