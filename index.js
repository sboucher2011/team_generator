// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

var engineer = [];
var intern = [];

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
    .then(({ managerName, managerId, managerEmail, managersOfficeNumber, question}) => {
        this.manager = new Manager(managerName, managerId, managerEmail, managersOfficeNumber);

        if (question == "Engineer") {
            return promptEngineer();
        } else if (question == "Intern") {
            return promptIntern();
        }
       
    });

};

const promptEngineer = () => {
    console.log(`
  =================
  Add a New Engineer
  =================
  `);

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
    .then(({ engineerName, engineerId, engineerEmail, engineersGitHub, question}) => {
        engineer.push(new Engineer(engineerName, engineerId, engineerEmail, engineersGitHub));

        if (question == "Engineer") {
            return promptEngineer();
        } else if (question == "Intern") {
            return promptIntern();
        }
       
    });
}

const promptIntern = () => {
    console.log(`
  =================
  Add a New Intern
  =================
  `);

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
    .then(({ internName, internId, internEmail, internSchool, question}) => {
        intern.push(new Intern(internName, internId, internEmail, internSchool));

        if (question == "Engineer") {
            return promptEngineer();
        } else if (question == "Intern") {
            return promptIntern();
        }
       
    });
}

promptUser()
 .then( () => {
    console.log(this.manager);
    console.log(engineer);
    console.log(engineer.length);
    console.log(intern);

    /*
    const pageHTML = generatePage(teamData);

    fs.writeFile('./dist/index.html', pageHTML, err => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('Page created! Check out index.html in this directory to see it!');

    });

    */
  });


