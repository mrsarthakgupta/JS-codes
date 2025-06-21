// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {                             //for...of loops over values (not keys) of an iterable like an array
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps                                            //Can use any data type as a key (number, object, function) but objects can only use strings as keys.

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {            //Error! Regular objects are not iterable with for...of.Instead,use Object.entries(myObject) with for...of, or use for...in.
//     console.log(key, ':-', value);
    
// }