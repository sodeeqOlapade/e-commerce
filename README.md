# simple tarminal based e-commerce

> ### **Introduction**

This project demonstrates JavaScript prototypal inheritance between different constructor functions and simulates an e-commerce platform where users and admins have common and different roles.

> ### **Features**

This app has two basic user category. The roles and priviledges associated with each of these user- category are laid highlighted below:

1 User

- Create a new user
- Read a single user by his ID
- Update the details of a user
- Search for a user by his name and return false if the user is not found but returns the user object if the user is found.
- Create a new order

2 Admins

- Read all users (\*)
- Update the details of a user

* Delete a user (\_)
* Delete all users (\_)
* Read all the orders(\*)
* Read one order by its ID(\*)
* Update order details(\*)
* Delete one order(\*)
* Delete all orders(\*)

**Note that admins level users can perform alongside their own functions those users can perform**

> ### **e-commerce**

This aspect is about the order object. This is the part where the e-commerce comes in. The Order object simulates the purchase requests made by a user and give complete details about such request.

The order object has the following properties:

- user_id
- timeOfOrder
- dateOfOrder
- Id (Auto increment)
- Products in the order
