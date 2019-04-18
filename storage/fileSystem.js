const fs = require("fs");

function readDb() {
  let response = fs.readFileSync("./storage/db.json", "utf8");
  responseAsObject = JSON.parse(response);
  return responseAsObject;
}

function writeDataToDb(data) {
  fs.writeFileSync("./storage/db.json", JSON.stringify(data, null, 3), "utf8");
}

function checkLength(user) {
  user.length !== 0
    ? console.log(user[0])
    : console.log("FALSE, user does not exist!");
}

readDbPath = function(path) {
  let response = readDb();
  console.log(response[path]);
};

searchUserByUsername = function(name) {
  let response = readDb();
  let user = response.usersDb.filter(user => user.username === name);
  checkLength(user);
};

searchUserByUserId = function(uId) {
  let response = readDb();
  let user = response.usersDb.filter(user => user.id === uId);
  checkLength(user);
};

updateUserById = function(uId, updatedUser) {
  let response = readDb();
  let user = response.usersDb.filter(user => user.id === uId);
  let userIndex = response.usersDb.indexOf(user[0]);
  response.usersDb[userIndex] = updatedUser;
  writeDataToDb(response);
  console.log("Details successfully updated!");
};

writeUserToDb = function(path, object) {
  let response = readDb();
  if (response[path].some(user => user.username === object.username)) {
    console.log(`user with username "${object.username}" already exist`);
    return;
  }
  response[path].push(object);
  writeDataToDb(response);
  console.log("Account successfully created!");
};

writeOrderToDb = function(path, object) {
  let response = readDb();
  response[path].push(object);
  writeDataToDb(response);
  console.log("Order successfully created!");
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
  readDbPath,
  searchUserByUsername,
  searchUserByUserId,
  writeUserToDb,
  updateUserById,
  writeOrderToDb,
  deleteUser,
  readOrders,
  deleteOrder
};
