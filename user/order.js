const generateOrderId = require("../user/orderId");
const User = require("../user/user");
const { dataBase, writeDataToDb } = require("../storage/fileSystem");

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
  if (orderId === "") {
    //read all orders
    return dataBase["ordersDb"];
  } else {
    //read with Id
    let order = dataBase.ordersDb.find(order => order.orderId === orderId);

    if (order === undefined) {
      throw new Error(`Order with orderId ${orderId} does not exist`);
    } else {
      return order;
    }
  }
};

Order.prototype.updateOrderDetails = function(orderId, products) {
  //implement here
  let order = dataBase.ordersDb.find(order => order.orderId === orderId);
  if (order === undefined) {
    throw new Error(`order with id: "${orderId}" does not exist`);
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

Order.prototype.deleteOrder = function(orderId) {
  //implement that nothing deletes except when id or nothing is entered
  if (orderId === "") {
    dataBase.ordersDb = [];
    console.log("All Orders deleted!");
  } else {
    let orderToBeDeleted = dataBase.ordersDb.filter(
      order => order.orderId === orderId
    );
    let orderIndex = dataBase.ordersDb.indexOf(orderToBeDeleted[0]);
    if (orderIndex === -1) {
      throw new Error(`Order with ${orderId} does not exist`);
    }
    dataBase.ordersDb.splice(orderIndex, 1);
    console.log("order successfully deleted!");
  }
  writeDataToDb(dataBase);
};

module.exports = Order;
