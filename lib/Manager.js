// The other three classes will extend Employee.
const Employee = require('./Employee.js');

// Extends Employee and has officeNumber
class Manager extends Employee {
    constructor(name, id, email,) {
        super(name, id, email);
        this.officeNumber = 1345;
    }

// getRole() // Overridden to return 'Manager'
    getRole() { 
        return "Manager";
    }
};

module.exports = Manager