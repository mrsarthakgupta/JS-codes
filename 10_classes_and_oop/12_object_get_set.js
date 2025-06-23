const User = {
    _email: 'h@hc.com',                // Actual email stored here
    _password: "abc",                  // Not used here, but exists

    get email() {
        return this._email.toUpperCase(); 
    },

    set email(value) {                  // When you assign to 'email', this function is triggered
        this._email = value;
    }
};

const tea = Object.create(User);        // Create a new object 'tea' that links to 'User'


console.log(tea.email); 


