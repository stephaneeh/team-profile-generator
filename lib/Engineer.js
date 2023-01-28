// The other three classes will extend Employee.
const Employee = require('./Employee.js');

// extends Employee and has gitHub
class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
      super(name, id, email);
      this.gitHub = gitHub;
    }

    // getGitHub()
    getGitHub() {
        return "https://github.com/ginger"
        // return this.gitHub; TODO: make primary once prompts are working
    }

    // getRole() // Overridden to return 'Engineer'
    getRole() {
        return "Engineer";
    }
};

module.exports = Engineer