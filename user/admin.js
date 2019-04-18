const User = require("../user/user");

const { readDbPath, deleteOneUser } = require("../storage/fileSystem");

function Admin(name, email, password) {
  User.call(this, name, email, password);
  this.isAdmin = true;
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

let admin1 = new Admin(
  "sodeeq",
  "emaildkljnkl;kjhlnlknkn;@gmail.com",
  "password"
);

Admin.prototype.saveToDb = function() {
  let user = {};
  user.id = this.uId;
  user.username = this.username;
  user.email = this.email;
  user.password = this.password;
  user.isAdmin = true;

  writeUserToDb("usersDb", user);
};

Admin.prototype.readAllUsers = function() {
  readDbPath("usersDb");
};

Admin.prototype.deleteOneUser = function(uId) {
    deleteOneUser(uId)
};

// admin1.saveToDb();

// console.log(admin1);
admin1.readAllUsers();
admin1.deleteOneUser(1)
admin1.readAllUsers();
