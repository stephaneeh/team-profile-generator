// node modules 
const fs = require('fs'); 
const inquirer = require('inquirer');

// links to classes
const Employee = require("./lib/Employee");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 


// link to page creation
const generateHTML = require('./src/generateHTML');
