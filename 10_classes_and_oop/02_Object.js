function multipleBy5(num){
    return num * 5;  
}

multipleBy5.power = 2;                        //Function bhi ek object hoti hai, isliye hum usme custom property daal sakte hain

console.log(multipleBy5(5));
console.log(multipleBy5.power);

// ✅ Har function ke paas ek default .prototype object hota hai
console.log(multipleBy5.prototype);            //useful hota hai jab function se object create karte ho (constructor)


// ✅ Constructor function banaya – iska kaam object banana hai
function createUser(username, score){         //Jab new keyword se call hota hai, 'this' ek naya object hota hai
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;  
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);  
}

const chai = new createUser("chai", 25);      // ✅ Yahan 'new' use kiya gaya hai – toh naya object banega

const tea = createUser("tea", 250);           // ❌ Yahan 'new' nahi hai – is wajah se object properly nahi banega, this.username = "tea" chala jaata hai global scope mein and tea mein undefined store ho jaata hai

chai.printMe();                               //chai object ke paas printMe method hai kyunki wo prototype se linked hai




/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
