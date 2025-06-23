class User {
    constructor(email, password){
        this.email = email;                           //this calls the email setter defined below.
        this.password = password                      //this calls the password setter defined below.
    }

    get email(){
        return this._email.toUpperCase()             // Returns email in uppercase
    }
    set email(value){
        this._email = value                          // Stores actual email in a private variable
    }

    get password(){
        return `${this._password}Sarthak`            //	_email/_Password: Convention to show it’s a "private" variable (not truly private in JS)
    }                                                // Hides the real storage (_email)

    set password(value){
        this._password = value
    }
}

const Sarthak = new User("S@Sarthak.ai", "abc")
console.log(Sarthak.email);

/* 
Getter: A getter is a method that lets you access a property as if it's a normal variable, but you can add logic behind it.
Setter: A setter is a method that lets you set/change a property, again with custom logic, like validation or transformation.

why to use getters and setters? 
1.Control Access: You can control how properties are accessed and modified. 
2.Validation: You can add validation logic when setting a property.
3.Modify output: You can modify the output of a property when it's accessed.    
4.Encapsulation: It helps in encapsulating the internal representation of the object.
5.Avoid Direct Access: It prevents direct access to the internal state of an object, allowing you to change the internal implementation without affecting external code.
*/