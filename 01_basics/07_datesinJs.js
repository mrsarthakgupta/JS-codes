let myDate = new Date()                // 🕒 Creating a date object with current date and time

console.log(myDate.toString());        // Full date string with time and timezone
console.log(myDate.toDateString());    
console.log(myDate.toLocaleString());  // Date and time in local format of laptop (e.g., "18/6/2025, 11:30:00 pm")
console.log(typeof myDate);            


// let myCreatedDate = new Date(2023, 0, 23)           // Jan 23, 2023 (month is 0-based)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)   
// let myCreatedDate = new Date("2023-01-14")          
let myCreatedDate = new Date("01-14-2023")            // MM-DD-YYYY format (works but not preferred)


let myTimeStamp = Date.now()                 // ⏱️ Current timestamp in milliseconds since Jan 1, 1970

// console.log(myTimeStamp);                 // Current timestamp in ms
// console.log(myCreatedDate.getTime());     // Timestamp for created date (ms)
// console.log(Math.floor(Date.now()/1000)); // Current timestamp in seconds (UNIX time)


let newDate = new Date()
console.log(newDate);                 
console.log(newDate.getMonth() + 1);   // Month (0-based, so +1 gives actual month number)
console.log(newDate.getDay());         // Day of week (0 = Sunday, 6 = Saturday)

// 🌐 Formatting weekday name in full (e.g., "Monday", "Tuesday", etc.)
newDate.toLocaleString('default', {
    weekday: "long",                   
})
