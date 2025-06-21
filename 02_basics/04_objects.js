// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sarthak Gupta"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {                         // Nested object structure
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sarthak",
            lastname: "Gupta",
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }                        // Method 1: This would nest obj1 and obj2 as objects inside another object
// const obj3 = Object.assign({}, obj1, obj2, obj4)   // Method 2: Object.assign() merges all keys into a new object
const obj3 = { ...obj1, ...obj2 }                    // Method 3: Spread operator – cleaner and modern way to merge
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

//console.log(users[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
 console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));      //Checks if the object has the key 'isLoggedIn'


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

console.log(course.courseInstructor)

const {courseInstructor: instructor} = course      //Destructuring: extracting the instructor name and renaming it as 'instructor'

// console.log(courseInstructor);                 //This will give error because courseInstructor is not directly available after renaming
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

