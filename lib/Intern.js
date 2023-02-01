// The other three classes will extend Employee.
const Employee = require('./Employee.js');

// extends Employee and has gitHub
class Intern extends Employee {
    constructor(name, id, email, school) {
      super(name, id, email);
      this.school = school;
    }
    // getSchool()
    getSchool() {
        // return "MIT";
        return this.school; 
    }
    // getRole() // Overridden to return 'Intern'
    getRole() {
        return "Intern";
    }
};

module.exports = Intern