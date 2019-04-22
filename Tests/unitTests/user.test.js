const { User } = require("../../user/user");
jest.mock("../../storage/fileSystem");

const newUser = new User(
  "charles chiakwa",
  "charles@gmailkjhgfd.com",
  "password"
);

describe("Users", () => {
  it("throws error if users details are not filled in properly or  wrong data entered", () => {
    expect(() => {
      User();
    }).toThrow();
  });

  it("ensures writeToDb method of saveToDb is called", () => {
    newUser.saveToDb();

    expect(writeUserToDb).toHaveBeenCalled();
  });
});
