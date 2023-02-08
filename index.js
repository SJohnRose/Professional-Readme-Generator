// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const { writeFile } = require('fs').promises;


// TODO: Create an array of questions for user input
const questions = ["Enter title of project:", "Provide a short description", "Installation steps:", "Usage instructions:", "Collaborators", "License Type",
, "Features:"];

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: questions[0],
      },
      {
        type: 'input',
        name: 'description',
        message: questions[1],
      },
      {
        type: 'input',
        name: 'installation',
        message: questions[2],
      },
      {
        type: 'input',
        name: 'usageIns',
        message: questions[3] ,
      },
      {
        type: 'input',
        name: 'collaborators',
        message: questions[4],
      },
      {
        type: 'list',
        name: 'license',
        message: questions[5],
        choices: ["MIT", "Apache", "GPL"],
      },
      {
        type: 'input',
        name: 'features',
        message: questions[7],
      },
    ]);
  };
  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, generateMarkdown(data));
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then((data) => writeToFile('README.md', data))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
