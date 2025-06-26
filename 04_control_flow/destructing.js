// 🌟 JavaScript Destructuring - All in One Reference

// ✅ 1. Array Destructuring
const colors = ['red', 'green', 'blue'];

// Normal way
const first = colors[0];
const second = colors[1];

// Destructuring way
const [firstColor, secondColor] = colors;

console.log("Array Destructuring:");
console.log(firstColor); // 'red'
console.log(secondColor); // 'green'

// ✅ Skipping items
const [ , , thirdColor] = colors;
console.log(thirdColor); // 'blue'

// ✅ Default values in array destructuring
const [a = 'default', b = 'default', c = 'default', d = 'default'] = colors;
console.log(d); // 'default' (since 4th item doesn't exist)


// ✅ 2. Object Destructuring
const user = {
  name: 'Sarthak',
  age: 21,
  city: 'Bhopal'
};

// Normal way
const userName1 = user.name;
const userAge1 = user.age;

// Destructuring way
const { name, age } = user;

console.log("\nObject Destructuring:");
console.log(name); // 'Sarthak'
console.log(age);  // 21

// ✅ Rename variables
const { name: userName } = user;
console.log(userName); // 'Sarthak'

// ✅ Default values in object
const person = { name: 'Ravi' };
const { name: pName, age: pAge = 25 } = person;
console.log(pAge); // 25 (age not present, so default used)


// ✅ 3. Nested Object Destructuring
const employee = {
  id: 101,
  details: {
    fullName: 'Ankit Sharma',
    location: 'Delhi'
  }
};

// Normal way
const empName1 = employee.details.fullName;

// Destructuring way
const { details: { fullName, location } } = employee;
console.log("\nNested Object Destructuring:");
console.log(fullName);  // 'Ankit Sharma'
console.log(location);  // 'Delhi'

// ✅ 4. Nested Array Destructuring
const nestedArr = [1, [2, 3], 4];

// Normal way
const val2 = nestedArr[1][0];

// Destructuring way
const [ , [secondNested], fourth] = nestedArr;
console.log("\nNested Array Destructuring:");
console.log(secondNested); // 2
console.log(fourth);       // 4

// ✅ 5. Destructuring in Function Parameters

// With Object
function greet({ name, age }) {
  console.log(`Hello ${name}, age ${age}`);
}
greet(user); // Hello Sarthak, age 21

// With Array
function sum([x, y]) {
  return x + y;
}
console.log("\nFunction Parameter Destructuring:");
console.log(sum([5, 7])); // 12

// ✅ 6. Mixed Destructuring (Object with array inside)
const student = {
  name: 'Riya',
  scores: [80, 90, 100]
};

const { scores: [math, science, english] } = student;
console.log("\nMixed Destructuring:");
console.log(science); // 90

// ✅ 7. Destructuring with Rest operator
const fruits = ['apple', 'banana', 'mango', 'grapes'];
const [firstFruit, ...restFruits] = fruits;
console.log("\nRest Operator in Destructuring:");
console.log(firstFruit);   // apple
console.log(restFruits);   // ['banana', 'mango', 'grapes']

const { city, ...otherDetails } = user;
console.log(otherDetails); // { name: 'Sarthak', age: 21 }


// ✅ Summary (as comment):
/*
    🧠 Destructuring Types:
    -----------------------
    1. Array destructuring         → const [a, b] = arr;
    2. Object destructuring        → const {x, y} = obj;
    3. Rename variables            → const {x: newName} = obj;
    4. Default values              → const {x = defaultVal} = obj;
    5. Nested destructuring        → const {a: {b}} = obj;
    6. Function param destructure  → function({x}){} or function([a, b]){}
    7. Rest operator use           → const [a, ...rest] = arr; const {x, ...rest} = obj;

    🔁 Normal Way vs Destructuring:
    -------------------------------
    // Array
    const a = arr[0];          → const [a] = arr;

    // Object
    const x = obj.prop;        → const { prop: x } = obj;

    // Nested
    const val = obj.a.b;       → const { a: { b } } = obj;

    // In function
    function f(obj) {
      const x = obj.name;
    }                          → function f({ name }) {}
*/

