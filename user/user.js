const {
  dataBase,
  writeDataToDb
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

function checkLength(user) {
  if (user.length !== 0) {
    return user[0];
  } else {
    throw new Error("FALSE, user does not exist!");
  }
}

User.prototype.saveToDb = function() {

  if (dataBase["usersDb"].some(user => user.username === this.username)) {
    throw new Error(`user with username "${this.username}" already exist`);
  }
  dataBase["usersDb"].push(this);
  writeDataToDb(dataBase);
  console.log("Account successfully created!");
};

User.prototype.searchUserByName = function(name) {
  let user = dataBase.usersDb.filter(user => user.username === name);
  return checkLength(user);
};

User.prototype.readOneUser = function(uId) {
  let user = dataBase.usersDb.filter(user => user.uId === uId);
  return checkLength(user);
};

User.prototype.updateUserDetails = function(name, email, password) {
  
  let id = this.uId;
  let isAdmin = this.isAdmin;

  if (dataBase["usersDb"].some(user => user.username === name)) {
    throw new Error(`user with username "${readUser.username}" already exist`);
  }
  let readUser = User.prototype.readOneUser(this.uId);
  
  readUser.username = name;
  readUser.email = email;
  readUser.password = password;

  let user = dataBase.usersDb.filter(user => user.uId === id);
  let userIndex = dataBase.usersDb.indexOf(user[0]);

  isAdmin ? readUser.isAdmin = true : readUser.isAdmin= false;
  
  dataBase.usersDb[userIndex] = readUser;
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



module.exports = { User };
