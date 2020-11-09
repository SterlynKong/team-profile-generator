// Set requirements
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const inquirer = require("inquirer");
const path = require('path');
const fs = require('fs');

// set output directory
const output_dir = path.resolve(__dirname, "dist")

// set output path
const outputPath = path.join(output_dir, "team.html")


// render team.html using template
const render = require('./src/page-template.js');

// container for employees
const teamMates = [];

// container for employee ids
const ids = [];

// ask user to questions required for creation of team
function createManager() {
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
            name: "managerEmail",
            message: "Please enter the manager's email:"
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the manager's office number?"
        }
    ]).then(answers => {
        // create new Manager instance using user answers
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        // add manager to teamMates array
        teamMates.push(manager);
        // add manager id to ids array
        ids.push(answers.managerId);
        // call function to prompt user whether they want to add team member
        createTeam();
    });
};


function createTeam() {
    // prompt user with choice to add team member
    inquirer.prompt([
        {
            type: "list",
            name: "addMemberChoice",
            choices: ["Engineer", "Intern", "I do not want to add any more team members"]
        },
    ]).then(choice => {
        switch (choice.addMemberChoice) {
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


function addEnginner() {
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
            name: "engineerGithub",
            message: "What is the engineer's GitHub UserName?"
        }
    ]).then(answers => {
        // create new Engineer instance using user answers
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        // add Engineer to teamMates array
        teamMates.push(engineer);
        // add engineerId to ids array
        ids.push(answers.engineerId);
        // call function to prompt user whether they want to add team member
        createTeam();
    });
};


function addIntern() {
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
        // create new Intern using user's answers
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        // add intern to teamMates array
        teamMates.push(intern);
        // add intern id to ids array
        ids.push(answers.internId);
        // call function to prompt user whether they want to add team member
        createTeam();
    });
};


function buildTeam() {
    if (!fs.existsSync(output_dir)) {
        fs.mkdirSync(output_dir)
    }
    fs.writeFileSync(outputPath, render(teamMates), "utf-8");
};

createManager();
