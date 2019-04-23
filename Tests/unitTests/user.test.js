const { User } = require("../../user/user");
jest.mock("../../storage/fileSystem");

const newUser = new User(
  "charles chiakwa",
  "charles@gmailkjhgfd.com",
  "password"
);

const newUser1 = new User(
  "charles lukes",
  "charles@gmailkjhgfd.com",
  "password"
);

describe("Users", () => {
  it("throws error if users details are not filled in properly or  wrong data entered", () => {
    expect(() => {
      User();
    }).toThrow();
  });

  it("creates user when details are properly supplied", () => {
    expect(newUser).toBeDefined();
    expect(newUser).toMatchObject({
      username: "charles chiakwa",
      isAdmin: false
    });
  });

  it("ensures writeDataToDb method of saveToDb is called", () => {
    newUser.saveToDb();
    newUser1.saveToDb();

    expect(writeDataToDb).toHaveBeenCalled();
  });

  it("ensures the new user object is pushed into the usersDb array", () => {
    const result = readDb().usersDb;
    console.log(result);
    expect(result).toBeDefined();
    expect(result.length).toBeGreaterThanOrEqual(1);
    expect(result).toContainEqual({
      id: 0,
      username: "charles chiakwa",
      email: "charles@gmailkjhgfd.com",
      password: "password",
      isAdmin: false
    });
  });

  it("ensures saveToDb throws error if user already exist", () => {
    expect(() => {
      newUser.saveToDb();
    }).toThrow();
  });

  it("searches for user with username", () => {
    const result = newUser.searchUserByName("charles chiakwa");
    expect(result).toEqual({
      id: 0,
      username: "charles chiakwa",
      email: "charles@gmailkjhgfd.com",
      password: "password",
      isAdmin: false
    });
  });

  it("throws error if no user with such username exist through the search", () => {
    expect(() => {
      newUser.searchUserByName("chiakwa");
    }).toThrow();
  });

  it("searches for user with userId", () => {
    const result = newUser.readOneUser(0);
    expect(result).toEqual({
      id: 0,
      username: "charles chiakwa",
      email: "charles@gmailkjhgfd.com",
      password: "password",
      isAdmin: false
    });
  });

  it("throws error if no user with such useId exist through the search", () => {
    expect(() => {
      newUser.readOneUser("0");
    }).toThrow();
  });

  it("updates users details with the provided new details", () => {
    newUser.updateUserDetails(
      "charles chaikwa ebuka",
      "charleschiakwaebuka@gmail.com",
      "password1234"
    );

    const result = readDb().usersDb;

    expect(result).toContainEqual({
      id: 0,
      username: "charles chaikwa ebuka",
      email: "charleschiakwaebuka@gmail.com",
      password: "password1234",
      isAdmin: "false"
    });
  });

  it("throws error if the new username given during update exist", () => {
    expect(() => {
      newUser.updateUserDetails(
        "charles chaikwa ebuka",
        "charleschiakwaebuka@gmail.com",
        "password1234"
      );
    }).toThrow();
  });

  it("create new order for a user", () => {
    newUser.makeOrder(["mouse", "keyboard", "flash drive"]);
    newUser.makeOrder(["Headset", "VR-kit", "mousepad"]);
    newUser1.makeOrder(["pants", "shirts", "shoes"]);

    const result = readDb().ordersDb;
    console.log(result);
    expect(result).toBeDefined();
    expect(result.length).toBeGreaterThanOrEqual(1);
    expect(result[0]).toMatchObject({
      orderId: 0,
      userId: 0,
      username: "charles chiakwa",
      useremail: "charles@gmailkjhgfd.com",
      products: ["mouse", "keyboard", "flash drive"]
    });
  });
});
