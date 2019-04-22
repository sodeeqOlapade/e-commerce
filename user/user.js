const {
  readDb,
  readDbPath,
  dataBase,
  writeDataToDb
} = require("../storage/fileSystem");
const generateId = require("../user/id");
const order = require("../user/order");

function User(name, email, password) {
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof password !== "string" ||
    name === "" ||
    email === "" ||
    password === ""
  ) {
    throw new Error("Enter Valid name, email and password");
  }
  this.username = name;
  this.email = email;
  this.password = password;
  this.uId = generateId();
  this.isAdmin = false;
}

function checkLength(user) {
  if (user.length !== 0) {
    console.log(user[0]);
  } else {
    throw new Error("FALSE, user does not exist!");
  }
}

User.prototype.saveToDb = function() {
  let newUser = {};
  newUser.id = this.uId;
  newUser.username = this.username;
  newUser.email = this.email;
  newUser.password = this.password;
  newUser.isAdmin = false;

  if (dataBase["usersDb"].some(user => user.username === newUser.username)) {
    console.log(`user with username "${newUser.username}" already exist`);
    return;
  }
  dataBase["usersDb"].push(newUser);
  writeDataToDb(dataBase);
  console.log("Account successfully created!");
};

User.prototype.searchUserByName = function(name) {
  let user = dataBase.usersDb.filter(user => user.username === name);
  checkLength(user);
};

User.prototype.readOneUser = function(uId) {
  let user = dataBase.usersDb.filter(user => user.id === uId);
  checkLength(user);
};

User.prototype.updateUserDetails = function(name, email, password) {
  let id = this.uId;

  let updatedUser = {};
  updatedUser.id = id;
  updatedUser.username = name;
  updatedUser.email = email;
  updatedUser.password = password;
  updatedUser.isAdmin = "false";

  let user = dataBase.usersDb.filter(user => user.id === id);
  let userIndex = dataBase.usersDb.indexOf(user[0]);
  dataBase.usersDb[userIndex] = updatedUser;
  writeDataToDb(dataBase);
  console.log("Details successfully updated!");
};

User.prototype.makeOrder = function(products) {
  let userOrder = new order(
    (id = this.uId),
    (username = this.username),
    (email = this.email),
    products
  );

  dataBase["ordersDb"].push(userOrder);
  writeDataToDb(dataBase);
  console.log("Order successfully created!");
};

let sodeeq = new User(
  "sodeeq",
  "olapadeabiodungggjjjj20@gmail.com",
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

let tega = new User(
  "Ibrahim Joseph Otega",
  "ibrahimJosephIbrahim@gmail.com",
  "password"
);

// sodeeq.saveToDb();
// victor.saveToDb();
// charles.saveToDb();
// Joseph.saveToDb();
// ibrahim.saveToDb();
// tega.saveToDb();

// sodeeq.updateUserDetails(
//   "olapade abiodun",
//   "olapadeabiodun2009@gmail.com",
//   "password"
// );

// tega.readOneUser(3);

// sodeeq.makeOrder(['tea', 'bread', 'butter']);
// sodeeq.makeOrder(["rice", "beans", "chicken"]);
// victor.makeOrder(["jeans", "milk", "flour"]);
// charles.makeOrder(["rice", "beans", "chicken"]);
// ibrahim.makeOrder(["rice", "beans", "chicken"]);
// Joseph.makeOrder(["rice", "TV-set", "matress"]);

module.exports = { User };
