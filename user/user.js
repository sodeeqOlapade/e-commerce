const {
  readDbPath,
  searchUserByUsername,
  searchUserByUserId,
  writeDb,
  updateUserById
} = require("../storage/fileSystem");
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

User.prototype.searchUserByName = function(name) {
  searchUserByUsername(name);
};

User.prototype.searchUserById = function(uId) {
  searchUserByUserId(uId);
};

User.prototype.updateUserDetails = function(name, email, password) {
  let id = this.uId;

  let updatedUser = {};
  updatedUser.id = id;
  updatedUser.username = name;
  updatedUser.email = email;
  updatedUser.password = password;
  updatedUser.isAdmin = 'false';

  updateUserById(id, updatedUser);
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

// sodeeq.saveToDb();
// victor.saveToDb();
// charles.saveToDb();

let abetang = new User(
  "Abetang Joseph",
  "josephabetang.com",
  "password"
);

abetang.updateUserDetails('Joseph Abetang Abetang.', 'joseph@gmail.com', 'password')