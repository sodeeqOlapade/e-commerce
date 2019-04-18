const User = require("../user/user");

const {
  readDbPath,
  deleteUser,
  readOrders,
  deleteOrder
} = require("../storage/fileSystem");

function Admin(name, email, password) {
  User.call(this, name, email, password);
  this.isAdmin = true;
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

let admin1 = new Admin(
  "sodeeq",
  "emaildkljnkl;kjhlnlknkn;@gmail.com",
  "password"
);

Admin.prototype.saveToDb = function() {
  let user = {};
  user.id = this.uId;
  user.username = this.username;
  user.email = this.email;
  user.password = this.password;
  user.isAdmin = true;

  writeUserToDb("usersDb", user);
};

Admin.prototype.readAllUsers = function() {
  readDbPath("usersDb");
};

Admin.prototype.deleteOneUser = function(uId) {
  deleteUser(uId);
};

Admin.prototype.deleteAllUser = function() {
  deleteUser();
};

Admin.prototype.readOneOrder = function(orderId) {
  readOrders(orderId);
};

Admin.prototype.readAllOrders = function() {
  readOrders();
};

Admin.prototype.deleteOneOrder = function(uId) {
  deleteOrder(uId);
};

Admin.prototype.deleteAllOrder = function() {
  deleteOrder();
};

// admin1.saveToDb();

// console.log(admin1);
admin1.deleteAllOrder();
// admin1.deleteOneUser(1)
// admin1.readAllUsers();
