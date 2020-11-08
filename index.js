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

    // prompt for required manager information
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
        createTeam();
    });
};


function createTeam () {
    inquirer.prompt([
        {
            type: "list",
            name: "addMemberChoice",
            choices: ["Engineer", "Intern", "I do not want to add any more team members"]
        },
    ]).then(choice => {
        switch(choice.addmemberChoice) {
            case "Engineer":
                addEnginner();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                buildTeam();
        }
    }); 
};


function addEnginner () {
    // display message to user
    console.log("Some information about this engineer is required!")

    // prompt for required engineer information
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "engineerId",
            message: "Please provide the engineer's ID:"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "Please enter the engineer's email:"
        },
        {
            type: "input",
            name: "engineerGitHub",
            message: "What is the engineer's GitHub UserName?"
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGitHub);
        team.push(engineer);
        ids.push(answers.engineerId);
        createTeam();
    });
};


function addIntern () {
    // display message to user
    console.log("Some information about this intern is required!")

    // prompt for required intern information
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the team intern's name?"
        },
        {
            type: "input",
            name: "internId",
            message: "Please provide the intern's ID:"
        },
        {
            type: "input",
            name: "internEmail",
            message: "Please enter the intern's email:"
        },
        {
            type: "input",
            name: "internSchool",
            message: "What is the name of the intern's school?"
        }
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        team.push(intern);
        ids.push(answers.internId);
        createTeam();
    });
};

createManager();