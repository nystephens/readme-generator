// packages needed for this application 
const fs = require('fs');
const inquirer = require('inquirer');
const Choice = require('inquirer/lib/objects/choice');

// questions array for inquirer prompt
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?"
    },
    {
        type: 'input',
        name: 'description',
        message: "Give a detailed description of your project."
    },
    {
        type: 'input',
        name: 'installation',
        message: "Please enter instructions for installing and/or accessing your application."
    },
    {
        type: 'input',
        name: 'usage',
        message: "How do you use your application?"
    },
    {
        type: 'list',
        name: 'licenseBadge',
        message: "Which license badge would you like to apply to your project?",
        choices: ["Badge 1", "Badge 2", "Badge 3"]
    },
    {
        type: 'input',
        name: 'licenseLink',
        message: "Please enter a link for your license."
    },
    {
        type: 'input',
        name: 'licenseText',
        message: "Please provide text content for your license."
    },
    {
        type: 'input',
        name: 'contributing',
        message: "Give special guidelines for contributing to your project."
    },
    {
        type: 'input',
        name: 'tests',
        message: "Give special instructions for testing your project."
    },
    {
        type: 'input',
        name: 'questions',
        message: "Please enter your GitHub username so that others may contact you with questions or concerns regarding your project."
    }
];

// begin inquirer 
inquirer    
    .prompt(questions)
    // handle response (answers)
    .then(answers =>{
        console.log(answers);
    })
    // catch errors
    .catch(err => {
        // console log error 
        console.log(err);
        console.log('Error');
    });


// TODO: Create a function to write README file

// I made this one
////////////////////
// function writeToFile("./dist/README.md", data, (err) => {
//     if (err){
//         console.log(err);
//     }
// }

// copied from module project
const writeFile = fileContent => {
    return new Promise((resolve, reject) =>{
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there is an error reject promise and send error to the Promise's .catch method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesnt accidentally execute the resolve function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the .then method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
