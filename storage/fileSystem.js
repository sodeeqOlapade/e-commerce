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

module.exports = {
  readDb,
  readDbPath,
  dataBase,
  writeDataToDb
};
