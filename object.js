class User {
    // constructor
    constructor(email, name) {
        // properties
        this.email = email;
        this.name = name;
    }
    // methods
    login() {
        console.log(this.email, "just logged in");
    }

    logout() {
        console.log(this.email, "just logged out");
    }
}

var userOne = new User('cris@gmail.com', 'Cris-aian Vergara');
var userTwo = new User('ben@gmail.com', 'Ben Ten');

userOne.login();