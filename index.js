// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

//Variables
var finished = 'no';

const promptUser = () => {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'managerName',
          message: "Input team manager's name"
        },
        {
            type: 'input',
            name: 'managerId',
            message: "Input team manager's employee id"
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "Input team manager's email addres"
        },
        {
            type: 'input',
            name: 'managersOfficeNumber',
            message: "Input team manager's office number"
        },
        {
            type: 'list',
            name: 'question',
            message: "What would you like to add next?",
            choices: ['Engineer', 'Intern', 'Finish my Team']

        },
    ])
    .then(managerData => {
        if (managerData.question == "Engineer") {
            return promptEngineer(managerData);
        } else if (managerData.question == "Intern") {
            return promptIntern(managerData);
        }
    });
};

const promptEngineer = teamData => {
    console.log(`
  =================
  Add a New Engineer
  =================
  `);
  
  // If there's no 'engineers' array property, create one
  if (!teamData.engineers) {
    teamData.engineers = [];
  }
    return inquirer.prompt([
        {
        type: 'input',
        name: 'engineerName',
        message: "Input team engineer's name"
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "Input team engineer's employee id"
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "Input team engineer's email addres"
        },
        {
            type: 'input',
            name: 'engineersGitHub',
            message: "Input team engineer's github username"
        },
        {
            type: 'list',
            name: 'question',
            message: "What would you like to add next?",
            choices: ['Engineer', 'Intern', 'Finish my Team']

        },
    ])
    .then(managerData => {
        if (managerData.question == "Engineer") {
            return promptEngineer(managerData);
        } else if (managerData.question == "Intern") {
            return promptIntern(managerData);
        }
    });
}

const promptIntern = teamData => {
    console.log(`
  =================
  Add a New Intern
  =================
  `);
  
  // If there's no 'interns' array property, create one
  if (!teamData.interns) {
    teamData.interns = [];
  }
    return inquirer.prompt([
        {
        type: 'input',
        name: 'internName',
        message: "Input team intern's name"
        },
        {
            type: 'input',
            name: 'internId',
            message: "Input team intern's employee id"
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "Input team intern's email addres"
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "Input team intern's school"
        },
        {
            type: 'list',
            name: 'question',
            message: "What would you like to add next?",
            choices: ['Engineer', 'Intern', 'Finish my Team']

        },
    ])
    .then(managerData => {
        if (managerData.question == "Engineer") {
            return promptEngineer(managerData);
        } else if (managerData.question == "Intern") {
            return promptIntern(managerData);
        }
    });
}

promptUser()
  .then(teamData => {
    const pageHTML = generatePage(teamData);

    fs.writeFile('./dist/index.html', pageHTML, err => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('Page created! Check out index.html in this directory to see it!');

    });
  });
