import User, {printName as printUserName, printAge} from '/user.js';

const user = new User('Aian', 29);

console.log(user);

printUserName(user);

printAge(user);
