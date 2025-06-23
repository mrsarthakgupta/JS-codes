// let myName = "Sarthak     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.Sarthak = function(){                          //Ye method Object.prototype pe add kiya gaya hai matlab: har object (array, string, function, object) is method ko inherit karega.
    console.log(`Sarthak is present in all objects`);
}

Array.prototype.heySarthak = function(){                 // Ye method Array.prototype pe add kiya gaya hai matlab: sirf array is method ko inherit karega.
    console.log(`Sarthak says hello`);
}

// heroPower.Sarthak()                      //output: Sarthak is present in all objects
// myHeros.Sarthak()                        //output: Sarthak is present in all objects
// myHeros.heySarthak()                     //output: Sarthak says hello
// heroPower.heySarthak()                   //TypeError: heroPower.heySarthak is not a function

//-------------------------------inheritance--------------------------------------------

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

Teacher.__proto__ = User      //Teacher now inherits User, Agar tum (Teacher.name) ya (Teacher.email) access karoge, to JS User se utha lega

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport            //TASupport → inherits from → TeachingSupport. So,(TASupport.isAvailable) bhi accessible hoga.
}

Object.setPrototypeOf(TeachingSupport, Teacher) // TeachingSupport now inherits from Teacher [ modern syntax ]

//TASupport → TeachingSupport → Teacher → User


let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);                                     // actual string with spaces
    console.log(`True length is: ${this.trim().length}`);       // trimmed length
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()