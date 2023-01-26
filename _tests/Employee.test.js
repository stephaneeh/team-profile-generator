// The other three classes will extend Employee.
const Employee = require('../lib/Employee.js');

// test cases
describe("Employee", () => {
    describe("Employee object", () => {
      it("An employee object has been created", () => {
        const employee = new Employee("Roger", 1234, "roger@test.com");

        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
      });
    });

});
// creates employee object
// functions test
//it ('getName() should return ????)
//it (getID() should return ????)
//it (getEmail() should return ????)
//it (getRole() should return ????)