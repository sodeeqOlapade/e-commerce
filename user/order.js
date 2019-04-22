const generateOrderId = require("../user/orderId");
const User = require("../user/user");
const {
  dataBase,
  writeDataToDb
} = require("../storage/fileSystem");

function Order(userId, username, email, products) {
  this.orderId = generateOrderId();
  this.userId = userId;
  this.username = username;
  this.useremail = email;
  this.timeOfOrder = new Date().toLocaleTimeString();
  this.dateOfOrder = new Date().toLocaleDateString();
  this.products = products;
}

Order.prototype.readOrder = function(orderId) {
  if (orderId === '') {
    //read all orders
    console.log(dataBase["ordersDb"]);
  } else {
    //read with Id
    let order = dataBase.ordersDb.find(order => order.orderId === orderId);
    order === undefined
      ? console.log("Order does not exist")
      : console.log(order);
  }
};


Order.prototype.updateOrderDetails = function(orderId, products) {
  //implement here
  let order = dataBase.ordersDb.find(order => order.orderId === orderId);
  if (order === undefined) {
    console.log(`order with id: "${orderId}" does not exist`);
  }
  let orderIndex = dataBase.ordersDb.indexOf(order);
  console.log("before update", dataBase.ordersDb[orderIndex]);
  dataBase.ordersDb[orderIndex].products = products;
  dataBase.ordersDb[orderIndex].timeOfOrder = new Date().toLocaleTimeString();
  dataBase.ordersDb[orderIndex].dateOfOrder = new Date().toLocaleDateString();
  console.log("updated order", dataBase.ordersDb[orderIndex]);
  writeDataToDb(dataBase);
  console.log("Order successfully updated!");
};

Order.prototype.deleteOrder = function(uId) {
  if (uId === '') {
    dataBase.ordersDb = [];
    console.log("All Orders deleted!");
  } else {
    let orderToBeDeleted = dataBase.ordersDb.filter(
      order => order.orderId === uId
    );
    let orderIndex = dataBase.ordersDb.indexOf(orderToBeDeleted[0]);
    if (orderIndex === -1) {
      console.log("Order does not exist");
      return;
    }
    dataBase.ordersDb.splice(orderIndex, 1);
    console.log("order successfully deleted!");
  }
  writeDataToDb(dataBase);
};


module.exports = Order;
