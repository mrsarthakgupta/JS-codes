//Get property descriptor of Math.PI
const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

console.log("Descriptor of Math.PI:", descripter);
// Expected output:
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

//Try modifying Math.PI (should not change because writable is false)
console.log("Original Math.PI:", Math.PI); // 3.141592653589793
Math.PI = 5;
console.log("After trying to change Math.PI:", Math.PI); // Still 3.141592653589793


const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
};

console.log("Before modification:", Object.getOwnPropertyDescriptor(chai, "name"));

//Modify the property descriptor of 'name'
// Only set 'enumerable: true', but since 'writable' and 'configurable' are not specified,they automatically become false (default values)
Object.defineProperty(chai, 'name', {
    enumerable: true
});


console.log("After modification:", Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}

/*
Definition:
Object.getOwnPropertyDescriptor(obj, prop)
- Returns a property descriptor object that shows how a property behaves.
- The descriptor includes these keys:
  → value: The current value of the property.
  → writable: true/false – can the value be changed?
  → enumerable: true/false – will it show up in loops like for...in or Object.entries?
  → configurable: true/false – can the descriptor be changed or property deleted?
*/