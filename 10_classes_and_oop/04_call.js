function SetUsername(username){
    //complex DB calls
    this.username = username                            // 'this' refers to whoever calls this function
    console.log("called");
}


function createUser(username, email, password){         //Ye main constructor function hai jo ek user create karega

    SetUsername.call(this, username);                   // SetUsername is called with 'this' bound to the current createUser object
    this.email = email;                                 // So, this.username gets assigned to the newly created object
    this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);