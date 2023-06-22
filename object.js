class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
}

var userOne = new User('cris@gmail.com', 'Cris-aian Vergara');
var userTwo = new User('ben@gmail.com', 'Ben Ten');

console.log(userOne.name);
console.log(userOne.email);

console.log(userTwo.name);
console.log(userTwo.email);