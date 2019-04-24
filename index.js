const {User} = require('../e-commerce/user/user');
const {Admin} = require('../e-commerce/user/admin');

let sodeeq = new User(
  "sodeeq",
  "olapadeabiodungggjjjj20@gmail.com",
  "password"
);

let charles = new User(
  "charles chiakwa",
  "charles@gmailkjhgfd.com",
  "password"
);

let victor = new User(
  "Omolayo Victor",
  "omolayo@gma;oikuyjtil.com",
  "password"
);

let Joseph = new User(
  "Abetang Joseph",
  "abetangJosephAbetang@gmail.com",
  "password"
);

let ibrahim = new User(
  "Ibrahim Joseph",
  "ibrahimJosephIbrahim@gmail.com",
  "password"
);

let tega = new User(
  "Ibrahim Joseph Otega",
  "ibrahimJosephIbrahim@gmail.com",
  "password"
);

sodeeq.saveToDb();
victor.saveToDb();
charles.saveToDb();
Joseph.saveToDb();
ibrahim.saveToDb();
tega.saveToDb();



sodeeq.updateUserDetails(
  "olapade abiodun",
  "olapadeabiodun2009@gmail.com",
  "password"
);

Joseph.updateUserDetails(
  "Abetang Abetang Abetang",
  "olapadeabiodun2009@gmail.com",
  "password"
);

console.log(tega.searchUserByName('charles chiakwa'));

// console.log(tega.searchUserByName('chiakwa'));

console.log(ibrahim.readOneUser(2));

// console.log(ibrahim.readOneUser(-1));


sodeeq.makeOrder(['tea', 'bread', 'butter']);
sodeeq.makeOrder(["rice", "beans", "chicken"]);
victor.makeOrder(["jeans", "milk", "flour"]);
charles.makeOrder(["rice", "beans", "chicken"]);
ibrahim.makeOrder(["rice", "beans", "chicken"]);
Joseph.makeOrder(["rice", "TV-set", "matress"]);


let admin1 = new Admin(
  "sodeeqOlapade",
  "emaildkljnklkjhlnlknkn;@gmail.com",
  "password"
);

let admin2 = new Admin(
  "remilekun",
  "emaildkljnklkjhlnlknkn;@gmail.com",
  "password"
);

let admin3 = new Admin(
  "blessing",
  "emaildkljnklkjhlnlknkn;@gmail.com",
  "password"
);

let admin4 = new Admin(
  "ademidoyin",
  "emaildkljnklkjhlnlknkn;@gmail.com",
  "password"
);

admin1.saveToDb();
admin2.saveToDb();
admin3.saveToDb();
admin4.saveToDb();

admin2.updateUserDetails( "awofisayo remilekun",
"emaildkljnklkjhlnlknkn;@gmail.com",
"password")

admin4.updateUserDetails( "Egbo Uchena",
"emaildkljnklkjhlnlknkn;@gmail.com",
"password")

// admin3.updateUserDetails( "Egbo Uchena",
// "emaildkljnklkjhlnlknkn;@gmail.com",
// "password")


admin1.makeOrder(['macbook pro', 'keyboard', 'pen']);
admin3.makeOrder(["bently", "bugati", "benz"]);


console.log(admin1.readAllUsers());

console.log(admin1.searchUserByName('Ibrahim Joseph Otega'));

console.log(admin1.readOneUser(9));

admin1.deleteUser(3);
admin1.deleteUser();

//console.log(admin1.readAllUsers());


console.log(admin1.readOrder());

console.log(admin1.readOrder(4));

admin2.updateOrderDetails(0, ['book', 'pen', 'eraser']);
admin4.updateOrderDetails(1, ["coke", "fanta", "pepsi"]);


admin1.deleteOrder(1);

admin1.deleteOrder();




