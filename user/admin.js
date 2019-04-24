const { User } = require("../user/user");
const Order = require("../user/order");

const { dataBase, writeDataToDb } = require("../storage/fileSystem");

function Admin(name, email, password) {
  User.call(this, name, email, password);
  this.isAdmin = true;
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;



Admin.prototype.readAllUsers = function() {
  return dataBase["usersDb"];
};

Admin.prototype.deleteUser = function(uId = "") {
  if (uId === "") {
    dataBase.usersDb = [];
    console.log("All Users deleted!");
  } else {
    //reImplement in a better and smater way
    let user = dataBase.usersDb.filter(user => user.uId === uId);
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



module.exports = { Admin };
