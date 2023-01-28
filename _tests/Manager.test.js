// The other three classes will extend Employee.
const Manager = require('../lib/Manager.js');
const manager = new Manager("Roger", 1234, "roger@test.com", 1234);

// test cases
//creates manager object
describe ("Manager object", function () {
    it("Manager object is created", () => {
        expect(manager.officeNumber).toEqual(expect.any(Number));
    });
 
//it (getRole() should return Manager)
    it("getRole should return Manager", () => {
        expect(manager.getRole()).toEqual("Manager");
    });
});