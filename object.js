var userOne = {
    email: 'ryu@gmail.com',
    name: 'Ryu',
    login() {
        console.log(this.email, 'has logged in.');
    },
    logout() {
        console.log(this.email, 'has logged out.');
    }
};

userOne.name = "Aian";
userOne["name"] = "Mario";