//Employee Parent properties and methods
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        // return "Freya";
        return this.name;
    }

    getID() {
        // return 5678;
        return this.id; 
    }
    getEmail() {
        // return "freya@twitch.com";
        return this.email;
    }
    getRole() {
        return "Employee";
    }
};

module.exports = Employee