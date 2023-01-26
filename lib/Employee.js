//Employee Parent properties and methods
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return 'Freya';
    }

    getID() {
        return 5678;
    }
    getEmail() {
        return 'freya@twitch.com';
    }
    getRole() {
        return 'Employee';
    }
};

module.exports = Employee;