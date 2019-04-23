const { User } = require("../user/user");
const Order = require("../user/order");

const { dataBase, writeDataToDb } = require("../storage/fileSystem");

function Admin(name, email, password) {
  User.call(this, name, email, password);
  this.isAdmin = true;
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

Admin.prototype.saveToDb = function() {
  let newUser = {};
  newUser.id = this.uId;
  newUser.username = this.username;
  newUser.email = this.email;
  newUser.password = this.password;
  newUser.isAdmin = true;

  // writeUserToDb("usersDb", user);

  if (dataBase["usersDb"].some(user => user.username === newUser.username)) {
      throw new Error(`user with username "${newUser.username}" already exist`);

  }
  dataBase["usersDb"].push(newUser);
  writeDataToDb(dataBase);
  console.log("Account successfully created!");
};

Admin.prototype.readAllUsers = function() {
  return dataBase["usersDb"];
};

Admin.prototype.deleteUser = function(uId = "") {
  if (uId === "") {
    dataBase.usersDb = [];
    console.log("All Users deleted!");
  } else {
    //reImplement in a better and smater way
    let user = dataBase.usersDb.filter(user => user.id === uId);
    let userIndex = dataBase.usersDb.indexOf(user[0]);
    if (userIndex === -1) {
      throw new Error(`User with id ${uId} does not exist`)
    }
    dataBase.usersDb.splice(userIndex, 1);
    console.log("User successfully deleted!");
  }
  writeDataToDb(dataBase);
};

Admin.prototype.readOrder = function(orderId = "") {
  return Order.prototype.readOrder(orderId);
};

Admin.prototype.deleteOrder = function(uId = "") {
  Order.prototype.deleteOrder(uId);
};

Admin.prototype.updateOrderDetails = function(orderId, products) {
  //call the method that does this on the order d
  Order.prototype.updateOrderDetails(orderId, products);
};

// let admin1 = new Admin(
//   "sodeeqOlapade",
//   "emaildkljnklkjhlnlknkn;@gmail.com",
//   "password"
// );

// let admin2 = new Admin(
//   "remilekun",
//   "emaildkljnklkjhlnlknkn;@gmail.com",
//   "password"
// );

// let admin3 = new Admin(
//   "blessing",
//   "emaildkljnklkjhlnlknkn;@gmail.com",
//   "password"
// );

// let admin4 = new Admin(
//   "ademidoyin",
//   "emaildkljnklkjhlnlknkn;@gmail.com",
//   "password"
// );

// admin2.updateUserDetails( "awofisayo",
// "emaildkljnklkjhlnlknkn;@gmail.com",
// "password")

// admin1.deleteOrder();
// admin2.saveToDb();
// admin2.saveToDb();
// admin3.saveToDb();
// admin4.saveToDb();

// admin1.makeOrder(['macbook pro', 'keyboard', 'pen']);
// admin3.makeOrder(["bently", "bugati", "benz"]);

// console.log(admin1);

// admin1.adminDeleteOneOrder(1);
// admin1.deleteOneUser(1)
// admin1.readAllUsers();

module.exports = { Admin };
