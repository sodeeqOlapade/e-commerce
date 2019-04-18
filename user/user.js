const {
  readDbPath,
  searchUserByUsername,
  searchUserByUserId,
  writeUserToDb,
  updateUserById,
  writeOrderToDb
} = require("../storage/fileSystem");
const generateId = require("../user/id");
const order = require("../user/order");

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

  writeUserToDb("usersDb", user);
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
  updatedUser.isAdmin = "false";

  updateUserById(id, updatedUser);
};

User.prototype.makeOrder = function(products) {
  let id = this.uId;

  let userOrder = new order(id, products);
  writeOrderToDb("ordersDb", userOrder);
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

let Joseph = new User(
  "Abetang Joseph",
  "abetangJosephAbetang@gmail.com",
  "password"
);

let ibrahim = new User(
  "Ibrahim Joseph",
  "ibrahimJosephIbrahim@gmail.com",
  "password"
);

// victor.saveToDb();
// charles.saveToDb();
// Joseph.saveToDb();
// ibrahim.saveToDb();

// sodeeq.makeOrder(['tea', 'bread', 'butter']);
// sodeeq.makeOrder(["rice", "beans", "chicken"]);
// victor.makeOrder(["rice", "beans", "chicken"]);
// charles.makeOrder(["rice", "beans", "chicken"]);
// ibrahim.makeOrder(["rice", "beans", "chicken"]);
// Joseph.makeOrder(["rice", "beans", "chicken"]);

module.exports = User;
