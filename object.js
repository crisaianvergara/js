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

class Admin extends User {
    deleteUser(user) {
        users = users.filter(u => {
            return u.email != user.email;
        })
    }
}

var userOne = new User('cris@gmail.com', 'Cris-aian Vergara');
var userTwo = new User('ben@gmail.com', 'Ben Ten');
var admin = new Admin('anna@gmail.com', "Anna Smith");

var users = [userOne, userTwo, admin];

admin.deleteUser(userOne);

console.log(users);