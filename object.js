class User {
    // constructor
    constructor(email, name) {
        // properties
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    // methods
    login() {
        console.log(this.email, "just logged in");
        return this;
    }

    logout() {
        console.log(this.email, "just logged out");
        return this;
    }

    updateScore() {
        this.score++;
        console.log(this.email, "score is now", this.score);
        return this;
    }
}

var userOne = new User('cris@gmail.com', 'Cris-aian Vergara');
var userTwo = new User('ben@gmail.com', 'Ben Ten');

userOne.login().updateScore().updateScore().logout();