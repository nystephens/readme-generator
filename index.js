// TODO: Include packages needed for this application 
const fs = require('fs');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
// enter questions in questions array and call variable in the inquirer promt below
const questions = [];
// begin inquirer 
inquirer    
    .prompt([
        {
            type: 'input',
            name: 'Whats up?',
            message: "What's up?"
        }
    ])
    // handle response (answers)
    .then(answers =>{
        console.log(answers);
    })
    // catch errors
    .catch(err => {
        // console log error 
        console.log(err);
        console.log('Ey, somethins wrong with this one..');
    });


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
