// Set required classes
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

// Set required npm modules
const inquirer = require('inquirer.js');
const path = require('path');
const fs = require('fs');


// render team.html using template
const render = require('./src/page-template.js');

// container for employees
const team = [];

// container for employee ids
const ids = [];

// ask user to questions required for creation of team
function createManager () {
    // Display start message to user
    console.log("Let's build your team!");

    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the team manager's name?"
        },
        {
            type: "input",
            name: "managerId",
            message: "Please provide the manager's ID:"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the manager's email:"
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the manager's office number?"
        }
    ]).then(answers => {
        const manager = new Manager (answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        team.push(manager);
        ids.push(answers.managerId);
    });
}
