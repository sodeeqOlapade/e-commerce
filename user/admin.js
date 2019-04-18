const User = require("../user/user");

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

console.log(admin1);

admin1.saveToDb();