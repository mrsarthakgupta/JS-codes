// Immediately Invoked Function Expressions (IIFE)


(function chai(){                                // 'chai' is the function name, but it's not available outside this block
    // named IIFE
    console.log(`DB CONNECTED`);
})();                                           //This is a named function chai wrapped in parentheses () to turn it into an expression
//                                                () at the end calls it immediately.

//chai();                                      // This will throw an error because 'chai' is not defined outside the IIFE

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Sarthak')

