class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){                               //A static method belongs to the class itself, not to its instances (objects created using new).
        return `123`
    }
}

const hitesh = new User("Sarthak")
// console.log(Sarthak.createId())                    //createId() is not available on the object iphone or hitesh

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(Teacher.createId());                            // If a parent class (User) has a static method,Then the child class (Teacher) can access it:
// console.log(iphone.createId());


// A static method is like a tool attached to the factory, not to the products it creates.
// So only the factory (class) can use it — not the items (objects) it produces.