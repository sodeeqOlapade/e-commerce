const generateOrderId = require("../user/orderId");
const User = require("../user/user");

function Order(userId, products) {
  this.orderId = generateOrderId();
  this.userId = userId;
  this.timeOfOrder = new Date().toLocaleTimeString();
  this.dateOfOrder = new Date().toLocaleDateString()
  this.products = products;
}


module.exports = Order;
