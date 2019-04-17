const db = require('../storage/fileSystem');

function User(name, email, password) {
  (this.username = name), (this.email = email), (this.password = password);
  this.id = generateId();

  let user = {};
  user.id = this.id;
  user.username = name;
  user.email = email;
  user.password = password;
  db[0].users.push(user);

  function generateId() {
    return db[0].users.length;
  }
}

User.prototype.readAllUsers = function(id) {
  db[0].users.length < id
    ? console.log(`user with ID : "${id}" doesn't exist`)
    : db[0].users[id].email;
};

let sodeeq = new User(
  "olapade sodeeq",
  "olapadeabiodun20@gmail.com",
  "password"
);


let charles = new User("charles chiakwa", "charles@gmail.com", "password");

let victor = new User("Omolayo Victor", "omolayo@gmail.com", "password");

console.log(sodeeq.readAllUsers(0));
console.log(charles.readAllUsers(1));
console.log(db[0].usersg);
