const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)                             // Pushes entire dc_heros array as one nested element
// console.log(marvel_heros);           
// console.log(marvel_heros[3][1]);     

const allHeros = marvel_heros.concat(dc_heros)          // Merges arrays (shallow)
console.log(allHeros);                  

const all_new_heros = [...marvel_heros, ...dc_heros]    // Spread method to merge arrays (modern way)
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)  // flat(Infinity) flattens deeply nested arrays into a single-level array
console.log(real_another_array);                         // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.isArray("Hitesh"));                    // false – it's a string
console.log(Array.from("Hitesh"));                       // converts string to array: ['H', 'i', 't', 'e', 's', 'h']
console.log(Array.from({name: "hitesh"}));               // returns [] because object is not directly iterable

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); 
