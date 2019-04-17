const fs = require("fs");

readDbPath = function(path) {
  fs.readFile("./storage/db.json", "utf8", (err, data) => {
    if (err) throw err;
    let response = JSON.parse(data);
    console.log(response[path]);
  });
};

writeDb = function(path, object) {
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
  });
};

module.exports = { readDbPath, writeDb };
