// The other three classes will extend Employee.
const Intern = require('../lib/Intern.js');
const intern = new Intern("Roger", 1234, "roger@test.com", "Harvard");

// test cases
// creates an intern object
describe("Intern", () => {
    it("An intern object should be created", () => {
        
        expect(intern.school).toEqual(expect.any(String));
    });

// it (getSchool() should turn info)
    it("getSchool should return a string", () => {
        expect(intern.getSchool()).toEqual(expect.any(String));
    });

// it (getRole() should return Intern)
    it("getRole should return Intern", () => {
        expect(intern.getRole()).toEqual("Intern");
    })
});