// The other three classes will extend Employee.
const Engineer = require('../lib/Engineer.js');
const engineer = new Engineer("Roger", 1234, "roger@test.com", "roger1234");
// test cases
// creates engineer object
describe("Engineer object", () => {
    it("An engineer object has been created", () => {
      expect(engineer.github).toEqual(expect.any(String));
    });

// it (getGitHub() should return info)
    it("getGithub is run and returns a string", () => {
        expect(engineer.getGitHub()).toEqual(expect.any(String));
    });

//it (getRole() should return Engineer)
    it("getRole is run and returns Employee", () => {
        expect(engineer.getRole()).toEqual("Engineer");
    });
});