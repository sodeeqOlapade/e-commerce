const { readDbPath, writeDb } = require("../storage/fileSystem");
const generateId = require("../user/id");

function User(name, email, password) {
  this.username = name;
  this.email = email;
  this.password = password;
  this.uId = generateId();
  this.isAdmin = false;
}

User.prototype.saveToDb = function() {
  let user = {};
  user.id = this.uId;
  user.username = this.username;
  user.email = this.email;
  user.password = this.password;
  user.isAdmin = false;

  writeDb("usersDb", user);
};

User.prototype.readAllUsers = function() {
  readDbPath("usersDb");
};

let sodeeq = new User(
  "olapade sodeeq",
  "olapadeabiodun20@gmail.com",
  "password"
);

let charles = new User(
  "charles chiakwa",
  "charles@gmailkjhgfd.com",
  "password"
);

let victor = new User(
  "Omolayo Victor",
  "omolayo@gma;oikuyjtil.com",
  "password"
);

console.log(victor.uId)
