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

    response[path].push(object);

    fs.writeFile(
      "./storage/db.json",
      JSON.stringify(response, null, 3),
      err => {
        if (err) throw err;
        path === "usersDb"
          ? console.log("User successfully added")
          : console.log("order successfully added");
      }
    );
  });
};

module.exports = { readDbPath, writeDb };
