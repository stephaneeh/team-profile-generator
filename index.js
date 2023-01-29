// node modules 
const fs = require('fs'); 
const inquirer = require('inquirer');

// links to classes
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js'); 

// link to page creation
const generateHTML = require('./src/generateHTML.js');

const teamArray = [];

//create manager object
const questions = [
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of the team manager',
            validate: answer => {
                if (answer == "" || answer == null) {
                    return console.log("Please enter the name of the manager"); }
                    return true;
                }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the ID number for the team manager',
            validate: function (answer) {
                if (answer == "" || answer == null) {
                    return console.log("Please enter the ID for the manager"); }
                    return true;
                }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter an email address for the team manager',
            validate: function (answer) {
                if (answer == "" || answer == null) {
                    return console.log("Please enter an email address for the manager"); }
                    return true;
                }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter an office number for the team manager',
            validate: function (answer) {
                if (answer == "" || answer == null) {
                    return console.log("Please enter an office number for the manager"); }
                    return true;
                }
        },
        {
            type: 'list',
            name: 'role',
            message: 'Which role would you like to add?',
            choices: ['Engineer', 'Intern'],
        },
        {
            type: 'input',
            name: 'employeeName',
            message: 'Please enter the name of your employee',
            validate: function (answer) {
                if (answer == "" || answer == null) {
                    return console.log("Please enter a contact email address"); }
                    return true;
                }
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: 'Please enter an email address for your employee',
            validate: function (answer) {
                if (answer == "" || answer == null) {
                    return console.log("Please enter an email address for your employee"); }
                    return true;
                }
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'Please enter a github for your employee',
            when: (answers) => answers.role === 'Engineer',
        },
    ];
    // .then(managerInput => {
    //     const {name, id, email, officeNumber} = managerInput;
    //     const manager = new Manager (name, id, email, officeNumber);

    //     teamArray.push(manager);
    //     console.log(manager);

    //     console.log(teamArray);
// });

//create employee objects
const createEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'Which role would you like to add?',
            choices: ['Engineer', 'Intern'],
        },
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of your employee',
            validate: function (answer) {
                if (answer == "" || answer == null) {
                    return console.log("Please enter a contact email address"); }
                    return true;
                }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter an email address for your employee',
            validate: function (answer) {
                if (answer == "" || answer == null) {
                    return console.log("Please enter an email address for your employee"); }
                    return true;
                }
        },
    ])
    .then(employeeInput => {
        let {name, role, email} = employeeInput;
        const employee = new Employee (name, role, email);

        teamArray.push(employee);
        console.log(employee);

        console.log(teamArray); //FIXME:
    })
};

function writeFile() {
    inquirer.prompt(questions)
        .then((data) => {
        fs.writeFile('index.html', generateHTML(data), (err) =>
        err ? console.error(err) : console.log('ReadMe file created!'))
    });
};


// Function to initialize app
function init() {
    writeFile()
};

// Function call to initialize app
init();