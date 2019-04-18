const fs = require("fs");

function readDb() {
  fs.readFile("./storage/db.json", "utf8", (err, data) => {
    if (err) throw err;
    let response = JSON.parse(data);
    return response;
  });
}

readDbPath = function(path) {
  fs.readFile("./storage/db.json", "utf8", (err, data) => {
    if (err) throw err;
    let response = JSON.parse(data);
    console.log(response[path]);
  });
};

searchUserByUsername = function(name) {
  fs.readFile("./storage/db.json", "utf8", (err, data) => {
    if (err) throw err;
    let response = JSON.parse(data);
    let user = response.usersDb.filter(user => user.username === name);
    user.length !== 0
      ? console.log(user[0])
      : console.log("FALSE, user does not exist!");
  });
};

searchUserByUserId = function(uId) {
  fs.readFile("./storage/db.json", "utf8", (err, data) => {
    if (err) throw err;
    let response = JSON.parse(data);
    let user = response.usersDb.filter(user => user.id === uId);
    user.length !== 0
      ? console.log(user[0])
      : console.log("FALSE, user does not exist!");
  });
};

updateUserById = function(uId, updatedUser) {
  fs.readFile("./storage/db.json", "utf8", (err, data) => {
    if (err) throw err;
    let response = JSON.parse(data);
    let user = response.usersDb.filter(user => user.id === uId);

    let userIndex = response.usersDb.indexOf(user[0]);

    response.usersDb[userIndex] = updatedUser;

    fs.writeFileSync(
      "./storage/db.json",
      JSON.stringify(response, null, 3),
      "utf8"
    );

    console.log("Details successfully updated!");
  });
};

writeUserToDb = function(path, object) {
  fs.readFile("./storage/db.json", "utf8", (err, data) => {
    if (err) throw err;
    let response = JSON.parse(data);

    if (response[path].some(user => user.username === object.username)) {
      console.log(`user with username "${object.username}" already exist`);
      return;
    }

    response[path].push(object);

    fs.writeFileSync(
      "./storage/db.json",
      JSON.stringify(response, null, 3),
      "utf8"
    );

    console.log("Account successfully created!");
  });
};

writeOrderToDb = function(path, object) {
  fs.readFile("./storage/db.json", "utf8", (err, data) => {
    if (err) throw err;
    let response = JSON.parse(data);

    response[path].push(object);

    fs.writeFileSync(
      "./storage/db.json",
      JSON.stringify(response, null, 3),
      "utf8"
    );

    console.log("Order successfully created!");
  });
};

deleteOneUser = function(uId) {
  fs.readFile("./storage/db.json", "utf8", (err, data) => {
    if (err) throw err;
    let response = JSON.parse(data);
    let user = response.usersDb.filter(user => user.id === uId);

    let userIndex = response.usersDb.indexOf(user[0]);

    if(userIndex === -1){
      console.log('User does not exist');
      return;
    }

    response.usersDb.splice(userIndex, 1);

    fs.writeFileSync(
      "./storage/db.json",
      JSON.stringify(response, null, 3),
      "utf8"
    );

    console.log("User successfully deleted!");
  });
};

module.exports = {
  readDbPath,
  searchUserByUsername,
  searchUserByUserId,
  writeUserToDb,
  updateUserById,
  writeOrderToDb,
  deleteOneUser
};
