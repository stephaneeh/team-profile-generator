// node modules 
const fs = require('fs'); 
const inquirer = require('inquirer');

// links to classes
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js'); 

// link to page creation
const generateHTML = require('./src/generateHTML');

const teamArray = [];

//create manager object
const addManager = () => {
    console.log(`
- - - - - - - - - - - - - - - - 

Let's add your team manager

- - - - - - - - - - - - - - - - 
    `);
    return inquirer.prompt ([
        {   type: 'input',
            name: 'name',
            message: 'Please enter the name of the team manager',
            validate: answer => {
                if (answer == "" || answer == null) {
                    return console.log("Please enter the name of the manager"); }
                    return true;
                }
        },
        {   type: 'input',
            name: 'id',
            message: 'Please enter the ID number for the team manager',
            validate: function (answer) {
                if (isNaN(answer)) {
                    return console.log("Please enter a valid ID for the manager")
                 }
                    return true;
                }
        },
        {   type: 'input', //FIXME: validate email address?
            name: 'email',
            message: 'Please enter an email address for the team manager',
            validate: function (answer) {
                if (answer == "" || answer == null) {
                    return console.log("Please enter an email address for the manager"); }
                    return true;
                }
        },
        {   type: 'input',
            name: 'officeNumber',
            message: 'Please enter an office number for the team manager',
            validate: function (answer) {
                if (isNaN(answer)) {
                    return console.log("Please enter an office number for the manager"); }
                    return true;
                }
        },
    ])
    .then((managerResults) => {
        const { name, id, email, officeNumber } = managerResults;
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager);
        console.log(manager); //FIXME: REMOVE AT END
        addEmployee();
        })
    };


//create manager object
const addEmployee = () => {
        console.log(`
- - - - - - - - - - - - - - - - 

Now let's add your team members

- - - - - - - - - - - - - - - - 
        `);
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
            validate: answer => {
                if (answer == "" || answer == null) {
                    return console.log("Please enter the name of your employee"); }
                    return true;
                }
        },
        {   
            type: 'input',
            name: 'id',
            message: 'Please enter the ID number for the team member',
            validate: function (answer) {
                if (isNaN(answer)) {
                    return console.log("Please enter a valid ID for the team member")
                 }
                    return true;
                }
        },
        {   
            type: 'input', //FIXME: validate email address?
            name: 'email',
            message: 'Please enter an email address for your employee',
            validate: function (answer) {
                if (answer == "" || answer == null) {
                    return console.log("Please enter an email address for your employee"); }
                    return true;
                }
        },
        {   //required for Engineer only
            type: 'input',
            name: 'github',
            message: 'Please enter a github for your employee',
            when: (input) => input.role === 'Engineer',
            validate: function (answer) {
                if (answer == "" || answer == null) {
                    return console.log("Please enter the github for your employee"); }
                    return true;
                }
        },
        {   //required for Intern only
            type: 'input',
            name: 'school',
            message: 'Please enter the school your intern attended',
            when: (input) => input.role === 'Intern',
            validate: function (answer) {
                if (answer == "" || answer == null) {
                    return console.log("Please enter a school name"); }
                    return true;
                }
        },    
    ])
    .then((employeeResults) => {
        let { name, id, email, role, github, school } = employeeResults; 
        let employee; 

        if (role === 'Engineer') {
            employee = new Engineer (name, id, email, github);
        } else if (role === 'Intern') {
            employee = new Intern (name, id, email, school);
        }
            teamArray.push(employee); //add results to teamArray()
            console.log(teamArray);
            confirmAddEmployee();
        })
    };

//create manager object
const confirmAddEmployee = () => {
    inquirer.prompt ([
        {   //add more employees
            type: 'confirm',
            name: 'addMoreEmployees',
            message: 'Would you like to add more employees?',
            default: false,
        },
    ])
    .then((data) => {
        console.log(data);
        if (data.addMoreEmployees === true){
            addEmployee();
        } else {
            console.log(`
- - - - - - - - - - - - - - - - 

Congratulations - your team has 
now been created!

- - - - - - - - - - - - - - - - 
            `);
            renderFile(data);
        };
    })
};


function renderFile() {
        fs.writeFile('index.html', renderHTML(teamArray), (err) =>
        err ? console.error(err) : console.log(teamArray))
    };

// Function call to initialize app
addManager();

