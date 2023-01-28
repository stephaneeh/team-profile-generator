// The other three classes will extend Employee.
const Employee = require('../lib/Employee.js');
const employee = new Employee("Roger", 1234, "roger@test.com");

// test cases
// creates employee object
describe("Employee object", () => {
  it("An employee object has been created", () => {

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
  });

  // functions test
  //it ('getName() should return ????)
  it("getName is run and returns a string", () => {
    expect(employee.getName()).toEqual(expect.any(String));
  });
  //it (getID() should return ????)
  it("getID is run and returns a number", () => {
    expect(employee.getID()).toEqual(expect.any(Number));
  });
  //it (getEmail() should return ????)
  it("getEmail is run and returns a string", () => {
    expect(employee.getEmail()).toEqual(expect.any(String));
  });

  //it (getRole() should return ????)
  it("getRole is run and returns Employee", () => {
    expect(employee.getRole()).toEqual("Employee");
  });
});


