const fs = require("fs");

function readDb() {
  let response = fs.readFileSync("./storage/db.json", "utf8");
  responseAsObject = JSON.parse(response);
  return responseAsObject;
}

let dataBase = readDb();

function writeDataToDb(data) {
  fs.writeFileSync("./storage/db.json", JSON.stringify(data, null, 3), "utf8");
}

readDbPath = function(path) {
  let response = readDb();
  console.log(response[path]);
};

updateOrderById = function(orderId, products) {
  let response = readDb();
  let order = response.ordersDb.find(order => order.orderId === orderId);
  if (order === undefined) {
    console.log(`order with id: "${orderId}" does not exist`);
  }
  let orderIndex = response.ordersDb.indexOf(order);
  console.log("before update", response.ordersDb[orderIndex]);
  response.ordersDb[orderIndex].products = products;
  response.ordersDb[orderIndex].timeOfOrder = new Date().toLocaleTimeString();
  response.ordersDb[orderIndex].dateOfOrder = new Date().toLocaleDateString();
  console.log("updated order", response.ordersDb[orderIndex]);
  writeDataToDb(response);
  console.log("Order successfully updated!");
};


deleteUser = function(uId) {
  let response = readDb();
  if (arguments.length === 0) {
    response.usersDb = [];
    console.log("All Users deleted!");
  } else {
    let user = response.usersDb.filter(user => user.id === uId);
    let userIndex = response.usersDb.indexOf(user[0]);
    if (userIndex === -1) {
      console.log("User does not exist");
      return;
    }
    response.usersDb.splice(userIndex, 1);
    console.log("User successfully deleted!");
  }
  writeDataToDb(response);
};

readOrders = function(id) {
  let response = readDb();
  if (arguments.length === 0) {
    //read all orders
    console.log(response["ordersDb"]);
  } else {
    //read with Id
    let order = response.ordersDb.find(order => order.orderId === id);
    order === undefined
      ? console.log("Order does not exist")
      : console.log(order);
  }
};

deleteOrder = function(uId) {
  let response = readDb();
  if (arguments.length === 0) {
    response.ordersDb = [];
    console.log("All Orders deleted!");
  } else {
    let orderToBeDeleted = response.ordersDb.filter(
      order => order.orderId === uId
    );
    let orderIndex = response.ordersDb.indexOf(orderToBeDeleted[0]);
    if (orderIndex === -1) {
      console.log("Order does not exist");
      return;
    }
    response.ordersDb.splice(orderIndex, 1);
    console.log("order successfully deleted!");
  }
  writeDataToDb(response);
};

module.exports = {
  readDb,
  readDbPath,
  deleteUser,
  readOrders,
  deleteOrder,
  updateOrderById,
  dataBase,
  writeDataToDb
};
