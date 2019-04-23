const { Admin } = require("../../user/admin");
jest.mock("../../storage/fileSystem");

const newAdmin = new Admin(
  "Jane Donald",
  "janeDonald@gmailkjhgfd.com",
  "password"
);

const newAdmin1 = new Admin(
  "John Doe Eric",
  "johnDoeEric@gmailkjhgfd.com",
  "password"
);

describe("Admin", () => {
  it("throws error if users details are not filled in properly or  wrong data entered", () => {
    expect(() => {
      new Admin();
    }).toThrow();
  });

  it("creates admin when details are properly supplied", () => {
    expect(newAdmin).toBeDefined();
    expect(newAdmin).toMatchObject({
      username: "Jane Donald",
      isAdmin: true
    });
  });

  it("ensures writeDataToDb method of saveToDb is called", () => {
    newAdmin.saveToDb();
    newAdmin1.saveToDb();

    expect(writeDataToDb).toHaveBeenCalled();
  });

  it("ensures the new admin object is pushed into the usersDb array", () => {
    const result = readDb().usersDb;
    expect(result).toBeDefined();
    expect(result.length).toBeGreaterThanOrEqual(1);
    expect(result).toContainEqual({
      id: 0,
      username: "Jane Donald",
      email: "janeDonald@gmailkjhgfd.com",
      password: "password",
      isAdmin: true
    });
  });

  it("ensures saveToDb throws error if admin with same name already exist", () => {
    expect(() => {
      newAdmin.saveToDb();
    }).toThrow();
  });

  it("fetches and display all users in the database", () => {
    const result = newAdmin.readAllUsers();
    console.log("after added admin", result);
    expect(result).toBeDefined();
    expect(result.length).toBeGreaterThanOrEqual(1);
    expect(result).toContainEqual({
      id: 0,
      username: "Jane Donald",
      email: "janeDonald@gmailkjhgfd.com",
      password: "password",
      isAdmin: true
    });
    expect(result).toContainEqual({
      id: 1,
      username: "John Doe Eric",
      email: "johnDoeEric@gmailkjhgfd.com",
      password: "password",
      isAdmin: true
    });
  });

  it("fetches and display all orders in the database", () => {
    newAdmin.makeOrder(["mouse", "keyboard", "flash drive"]);
    newAdmin1.makeOrder(["Headset", "VR-kit", "mousepad"]);
    newAdmin.makeOrder(["pants", "shirts", "shoes"]);

    const result = newAdmin.readOrder();
    console.log("orders", result);
    expect(result).toBeDefined();
    expect(result.length).toBeGreaterThanOrEqual(1);
    expect(result[0]).toMatchObject({
      orderId: 0,
      userId: 0,
      username: "Jane Donald",
      useremail: "janeDonald@gmailkjhgfd.com",
      products: ["mouse", "keyboard", "flash drive"]
    });
  });

  it("fetches and display order with matching ID in the database", () => {
    const result = newAdmin.readOrder(0);
    console.log("order with id", result);
    expect(result).toBeDefined();
    expect(result).toMatchObject({
      orderId: 0,
      userId: 0,
      username: "Jane Donald",
      useremail: "janeDonald@gmailkjhgfd.com",
      products: ["mouse", "keyboard", "flash drive"]
    });
  });

  it("throws error if invalid orderId is entered", () => {
    expect(() => {
      newAdmin.readOrder(-1);
    }).toThrow();
  });

  it("updates order details with the provided new details", () => {
    newAdmin.updateOrderDetails(0, ["rice", "beans", "oil"]);

    const result = readDb().ordersDb;

    expect(result[0]).toMatchObject({
      orderId: 0,
      userId: 0,
      username: "Jane Donald",
      useremail: "janeDonald@gmailkjhgfd.com",
      products: ["rice", "beans", "oil"]
    });
  });

  it("throws error if attempt to update non-existing order was made", () => {
    expect(() => {
      newAdmin.updateOrderDetails(-1, ["bread", "butter", "milk"]);
    }).toThrow();
  });

  it("deletes the order with the given ID from database", () => {
    newAdmin.deleteOrder(0);
    const result = readDb().ordersDb;
    expect(result).not.toContain({
      orderId: 0,
      userId: 0,
      username: "Jane Donald",
      useremail: "janeDonald@gmailkjhgfd.com",
      timeOfOrder: "04:29:20",
      dateOfOrder: "23/04/2019",
      products: ["rice", "beans", "oil"]
    });
  });

  it("throws error if attempt to delete non-existing order was made", () => {
    expect(() => {
      newAdmin.deleteOrder(-1);
    }).toThrow();
  });

  it("deletes all orders from database", () => {
    newAdmin.deleteOrder();
    const result = readDb().ordersDb;
    expect(result.length).toBe(0);
  });

  it("deletes the user with the given ID from database", () => {
    newAdmin.deleteUser(0);
    const result = readDb().usersDb;
    expect(result).not.toContain({
      id: 0,
      username: "Jane Donald",
      email: "janeDonald@gmailkjhgfd.com",
      password: "password",
      isAdmin: true
    });
  });

  it("throws error if attempt to delete non-existing user was made", () => {
    expect(() => {
      newAdmin.deleteUser(-1);
    }).toThrow();
  });

  it("deletes all user from database", () => {
    newAdmin.deleteUser();
    const result = readDb().usersDb;
    expect(result.length).toBe(0);
  });
});
