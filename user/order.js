const generateOrderId = require("../user/orderId");
const User = require("../user/user");
const { readOrders, deleteOrder } = require("../storage/fileSystem");

function Order(userId, username, email, products) {
  this.orderId = generateOrderId();
  this.userId = userId;
  this.username = username;
  this.useremail = email;
  this.timeOfOrder = new Date().toLocaleTimeString();
  this.dateOfOrder = new Date().toLocaleDateString();
  this.products = products;
}

Order.prototype.readOneOrder = function(orderId) {
  readOrders(orderId);
};

Order.prototype.readAllOrders = function() {
  readOrders();
};

Order.prototype.deleteOneOrder = function(uId) {
  deleteOrder(uId);
};

Order.prototype.deleteAllOrder = function() {
  deleteOrder();
};

Order.prototype.updateOrderDetails = function() {
  console.log("updated!!!!");
};

module.exports = Order;
