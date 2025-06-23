//syntax:
// const myPromise = new Promise(function(resolve, reject) {
//   // async task here (like API call, setTimeout, DB query)

//   if (/* task successful */) {
//     resolve(result); // Success — pass data
//   } else {
//     reject(error);   // Failure — pass error
//   }
// });

// ✅ PROMISE 1: Basic async task with then()
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()                                    // Resolve the promise (no data sent)
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

// ✅ PROMISE 2: Anonymous promise used directly
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

// ✅ PROMISE 3: Returning data (an object) on resolve
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})          //resolve() is sending an object as data AND .then() catch that object.
    }, 1000)                                                            //resolve send data to .then() and reject send data to .catch()
})

promiseThree.then(function(user){
    console.log(user);
})

// ✅ PROMISE 4: Using .then, .catch, and .finally
// Chaining promises: it is the process of linking multiple promises together so that the output of one promise can be used as the input for the next promise.
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

// Handling the promise
promiseFour                      //ek .then() dusre .then() ko value pass karega 
.then((user) => {
    console.log(user);          // Log the user object       
    return user.username;       // Return username to next .then()
})
.then((username) => {
    console.log(username);      // Log the username separately
})
.catch(function(error){
    console.log(error);         // Log any errors if promise is rejected
})
.finally(() => {
    console.log("The promise is either resolved or rejected");  // Always runs
})

// ✅ PROMISE 5: Using async/await for cleaner syntax
// Async/Await: It is a way to work with promises in a more synchronous manner,
// Async functions always return a promise, and the await keyword can be used to pause the execution
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});
// Async function to consume promiseFive using await
async function consumePromiseFive(){
    try {
        const response = await promiseFive;  // Wait for the promise to complete
        console.log(response);               // Log the response if resolved
    } catch (error) {
        console.log(error);                  // Catch and log if promise is rejected
    }
}
consumePromiseFive()

// ✅ PROMISE 6: Using Fetch API to make network requests
// Fetch API: It is a modern way to make network requests in JavaScript, it returns a promise that resolves to the response of the request.

// async function getAllUsers(){
//     try {                                                                                //try {} handles success
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')       //await waits for the Promise to finish.
//         const data = await response.json()                                               //the response is in string format, so we need to convert it to JSON(javascript object notation)
//         console.log(data);
//     } catch (error) {                                                                    //catch {} handles error
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

//fetch() is a built-in JavaScript function used to get data from a server or API — without reloading the page.
//fetch() returns a promise that resolves to the response of the request.   
//fetch() only rejects on network errors, not on HTTP errors like 404 or 500.So, always check response.ok or response.status manually in .then() to handle such cases properly.

fetch('https://api.github.com/users/hiteshchoudhary')  // Send HTTP request
.then((response) => {
    return response.json();  // Convert response to JSON
})
.then((data) => {
    console.log(data);       // Log the full user data
})
.catch((error) => {
    console.log(error);      // Catch and log if there's any error in fetch
})

// PROMISE.ALL (mentioned for further reading)
// It can be used to run multiple promises in parallel
// Example: Promise.all([p1, p2, p3]).then([...])