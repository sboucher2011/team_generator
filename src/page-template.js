const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

// create the Intern Cards
const generateInterns = (intern) => {
  return `
    <div class="col">
      <div class="card" style="width: 18rem;">
        <img src="data:image/png;base64,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" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${intern[0].getName()}</h5>
          <p class="card-text">${intern[0].getRole()}</p>
        </div>
                    
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern[0].getId()}</li>
              <li class="list-group-item">
                <a href="mailto:${intern[0].getEmail()}" class="card-link">${intern[0].getEmail()}</a>
              </li>
                <li class="list-group-item">${intern[0].getSchool()}</li>
              </ul>
        </div>
    </div>
   `;
};

//create the Engieneer Cards
const generateEngineers = (engineer) => {
  return `
      <div class="card" style="width: 18rem;">
      <img src="data:image/png;base64,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" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${engineer[0].getName()}</h5>
        <p class="card-text">${engineer[0].getRole()}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer[0].getId()}</li>
        <li class="list-group-item">
          <a href="mailto:${engineer[0].getEmail()}" class="card-link">${engineer[0].getEmail()}</a>
        </li>
        <li class="list-group-item">
          <a href="https://github.com/${engineer[0].getGithub()}" class="card-link">GitHub Username: ${engineer[0].getGithub()}</a>
        </li>
      </ul>
    </div>
    `;
};

module.exports = (manager, engineer, intern) => {
  // destructure page data by section
  //const { projects, about, ...header } = templateData;


  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
    
        <div class="container">
            <div class="row align-items-start">
              <div class="col">
                <div class="manager">
                    <div class="card" style="width: 18rem;">
                        <img src="https://static.thenounproject.com/png/2971026-200.png" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${manager.getName()}</h5>
                          <p class="card-text">${manager.getRole()}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">ID: ${manager.getId()}</li>
                          <li class="list-group-item">
                            <a href="mailto:${manager.getEmail()}" class="card-link">${manager.getEmail()}</a>
                          </li>
                          <li class="list-group-item">Phone: ${manager.getOfficeNumber()}</li>
                        </ul>
                    </div>
                </div>
              </div>
              <div class="col">
                ${generateEngineers(engineer)}
              </div>

              ${generateInterns(intern)}
              
            </div>
          </div>
    </body>
    </html>
    `;
};