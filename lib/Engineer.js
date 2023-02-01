// The other three classes will extend Employee.
const Employee = require('./Employee.js');

// extends Employee and has gitHub
class Engineer extends Employee {
    constructor(name, id, email, github) {
      super(name, id, email);
      this.github = github;
    }

    // getGitHub()
    getGitHub() {
        // return "https://github.com/ginger"
        return this.github; 
    }

    // getRole() // Overridden to return 'Engineer'
    getRole() {
        return "Engineer";
    }
};

module.exports = Engineer