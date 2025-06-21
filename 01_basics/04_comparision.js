// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

//Comparison operators (<, >, >=, <=) convert null to a number
// But
// Equality == does not convert null to a number 
// undefined is not converted to a number like null
// === checks type and value both
console.log(null === 0);
console.log("2" === 2);