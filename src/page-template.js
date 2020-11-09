// create the team
const renderTeam = team => {

    // create html for manager
    const generateManager = manager => {
        return `
                <div class="card employee-card">
                    <div class="card-header">
                        <h2 class="card-title">${manager.getName()}</h2>
                        <h3 class="card-title"></h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${manager.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                        <ul>
                    </div>
                </div>
        `;
    };

    // create html for engineer
    const generateEngineer = engineer => {
        return `
                <div class="card employee-card">
                    <div class="card-header">
                        <h2 class="card-title">${engineer.getName()}</h2>
                        <h3 class="card-title">${engineer.getRole()}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${engineer.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                            <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
                        <ul>
                    </div>
                </div>
        `;
    };


    // create html for intern
    const generateIntern = intern => {
        return `
                <div class="card employee-card">
                    <div class="card-header">
                        <h2 class="card-title">${intern.getName()}</h2>
                        <h3 class="card-title">${intern.getRole()}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${intern.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                            <li class="list-group-item">School: ${intern.getSchool()}</li>
                        <ul>
                    </div>
                </div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );

    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");
};


//export function to generateTeam
module.exports = team => {
    return `
        <html lang="en">
            <head>
                <meta charset="utf-8">
                <title>The Team</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/js/bootstrap.min.js">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap.min.css">
            </head>
            <body>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 jumbotron mb-3 team-heading">
                            <h1 class="text center">My Team</h1>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="team-area col-12 d-flex justify-content-center">
                        ${renderTeam(team)}
            </body>
        </html>
    `;
};