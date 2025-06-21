// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr[1]);

// Array methods

// myArr.push(6);       // Adds 6 to the end of the array
// myArr.push(7);       // Adds 7 to the end
// myArr.pop();         // Removes the last element (7)

// myArr.unshift(9);    // Adds 9 to the beginning
// myArr.shift();       // Removes the first element (9)

// console.log(myArr.includes(9));    // Returns true if 9 exists, otherwise false
// console.log(myArr.indexOf(3));     // Returns index of 3, or -1 if not found

const newArr = myArr.join()      // Converts array to string like: "0,1,2,3,4,5"

console.log(myArr);
console.log( newArr);


// slice, splice

console.log("A ", myArr);               

const myn1 = myArr.slice(1, 3);         // Returns [1, 2] (no change to myArr),, (but 3 not included)
console.log(myn1);                      // [1, 2]
console.log("B ", myArr);               // Original remains unchanged

const myn2 = myArr.splice(1, 3);        // Removes 3 elements from index 1 → [1, 2, 3]
console.log("C ", myArr);               // Modified → [0, 4, 5]
console.log(myn2);                      // Spliced part → [1, 2, 3]
