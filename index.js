// packages needed for this application 
const fs = require('fs');
const inquirer = require('inquirer');
const Choice = require('inquirer/lib/objects/choice');
const generateMarkdown = require('./utils/generateMarkdown');

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
        message: "Enter instructions for accessing and / or installing your application."
    },
    {
        type: 'input',
        name: 'usage',
        message: "Give a detailed description of how to use your application."
    },
    {
        type: 'list',
        name: 'licenseBadge',
        message: "Choose a license would you like to apply to your project.  If none is selected then this section will be left blank and you may insert your own license.",
        choices: ["Apache", "GNU", "MIT License"]
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
const promptUser = () => {
    return inquirer
        .prompt(questions)
        // handle response (answers)
        .then(answers => {
            return answers;
        })
        // catch errors
        .catch(err => {
            // console log error 
            console.log(err);
            console.log('Error');
        });
};

// function to write README file to ./dist/ 
const writeFile = readmeContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', readmeContent, err => {
            // if there is an error reject promise and send error to the Promise's .catch method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesnt execute the resolve function.
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the .then method
            resolve({
                ok: true,
                message: 'File created successfully! Check the "dist" folder for your custom README.md markdown file. ' 
            });
        });
    });
};

// initialize app function
function init() {
    promptUser()
    .then(readmeContent => {
        writeFile(generateMarkdown(readmeContent));
    });
};

// Function call to initialize app
init();

