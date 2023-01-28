//Employee Parent properties and methods
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return "Freya";
        // return this.name; TODO: make primary once prompts are working
    }

    getID() {
        return 5678;
        // return this.id; TODO: make primary once prompts are working
    }
    getEmail() {
        return "freya@twitch.com";
        // return this.email; TODO: make primary once prompts are working
    }
    getRole() {
        return "Employee";
    }
};

module.exports = Employee