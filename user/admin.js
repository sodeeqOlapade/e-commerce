const {User} = require("../user/user");
const Order = require("../user/order");

const { readDbPath, deleteUser } = require("../storage/fileSystem");

function Admin(name, email, password) {
  User.call(this, name, email, password);
  this.isAdmin = true;
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

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
  Order.prototype.readOneOrder(orderId);
};

Admin.prototype.readAllOrders = function() {
  Order.prototype.readAllOrders();
};

Admin.prototype.deleteOneOrder = function(uId) {
  Order.prototype.deleteOneOrder(uId);
};

Admin.prototype.deleteAllOrder = function() {
  Order.prototype.deleteAllOrder();
};

Admin.prototype.updateOrderDetails = function(orderId, products) {
  //call the method that does this on the order d
  Order.prototype.updateOrderDetails(orderId, products);
};

let admin1 = new Admin(
  "sodeeqOlapade",
  "emaildkljnklkjhlnlknkn;@gmail.com",
  "password"
);

let admin2 = new Admin(
  "remilekun",
  "emaildkljnklkjhlnlknkn;@gmail.com",
  "password"
);

let admin3 = new Admin(
  "blessing",
  "emaildkljnklkjhlnlknkn;@gmail.com",
  "password"
);

let admin4 = new Admin(
  "ademidoyin",
  "emaildkljnklkjhlnlknkn;@gmail.com",
  "password"
);

// admin1.deleteAllUser();

// admin2.deleteAllUser();
// admin2.saveToDb();
// admin3.saveToDb();
// admin4.saveToDb();

// admin1.makeOrder(['macbook pro', 'keyboard', 'pen']);
// admin3.makeOrder(["bently", "bugati", "benz"]);

// console.log(admin1);

// admin1.adminDeleteOneOrder(1);
// admin1.deleteOneUser(1)
// admin1.readAllUsers();
