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


module.exports = {
  readDb,
  readDbPath,
  deleteUser,
  dataBase,
  writeDataToDb
};
