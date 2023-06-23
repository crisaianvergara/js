function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function() {
    this.online = true;
    console.log(this.email +' has logged in');
}

User.prototype.logout = function() {
    this.online = false;
    console.log(this.email +' has logged out');
}

function Admin(...args) {
    User.apply(this, [args])
    this.role = "superuser";
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(u) {
    users = users.filter(user => {
        return user.email != u.email;
    });
};


var userOne = new User('cris@gmail.com', 'Cris-aian Vergara');
var userTwo = new User('ben@gmail.com', 'Ben Ten');
var admin = new Admin('anna@gmail.com', 'Anna Smith');

var users = [userOne, userTwo, admin];
