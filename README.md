# Professional README.md Generator

## Table of Contents

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## Description

This application creates a professionally structured README markdown file for a user’s project repository.  A well structured README is essential to creating a great application or webpage.  This markdown file will be a guide for users and contributors to successfully use or enhance your project.  This app makes the process easier by structuring content and creating the file for you.  Though this application makes creating a README.md file much easier, it is still recommended to think through each section thoroughly so that you can add concise and accurate information when prompted.  Once your markdown file is generated you may edit the content as you please from within the markdown file itself.

## Installation

Instructions for installation are as follows: 

1.  Navigate to the GitHub repository ( https://github.com/nystphens/readme-generator ) in your web browser and click the green dropdown menu that says “Code”.  Copy the SSH key to your clipboard and then open your terminal.  

2.  In your terminal navigate to the directory you wish to house this repository.   

3.  Type “git clone” into your command line and paste the SSH key you copied from the repository, then hit Enter.  A new file titled “readme-generator” containing the necessary files will appear in your chosen directory.  Due to file size, Node.js and is necessary  modules will not be cloned to your repository.  Please continue reading the instructions to find out how to install these modules on your computer.   

4.  Since this application uses Node.js you will have to install Node and the required Node modules to operate it.  For detailed instructions on how  to install Node.js to your computer please visit: https://www.guru99.com/download-install-node-js.html  

5.  Once Node is successfully installed on your computer, navigate to the index.js file in your terminal.  For quick access you can right click index.js in VS Code and click the option “Open in Integrated Terminal”. 

6.  Type the following command to install the proper node modules: “npm install”.  

7.  Check your newly downloaded “node_modules” folder to ensure that the correct packages have been installed.  The only dependency that is not included within the general Node module package is “inquirer”.  If this package is not present within your Node modules then run the command “npm install inquirer” to install it.  

8.  Once you have cloned the repository and downloaded Node.js and its necessary modules you are ready to use the Professional README.md Generator!  

## Usage

Created using Node.js, this application runs entirely within the command line.  To initiate the application first navigate to the correct directory in your terminal (see Installation Step 5), type the following command, and hit Enter:  “node index.js”.  When the user runs the application in their terminal they are met with a set of prompts initiated by the inquirer module that ask the user to provide content for each section of the README file.  The user is asked for a text input to provide the title of the project, a description, instructions for installation, how to use the application, how to contribute to the application, and finally the user’s GitHub username so they may be contacted with any questions.  The user is also asked to select a license for their project.  This application contains choices for three of the most popular publicly available license options.  If no license is selected then the License section is left blank.  The user may enter their own license or make changes later on as they see fit.  Once all the inquirer prompts have been answered by the user a file titled “README.md” is generated in the “dist” folder.  This file may be copied and pasted into any directory, but it is recommended that you place it within the root of your project directory so that it is readily available on your project’s GitHub page.  The generated README file will be available to edit after its initial creation.  

For a demonstration of this application in use please watch this video:
[Demonstration Video](https://drive.google.com/file/d/1005PfVJ-R6xv196u6RA0O0-AHNwO6AWJ/view)

## License
![MIT license](https://img.shields.io/badge/license-MIT-brightgreen)
[MIT license](https://opensource.org/licenses/MIT)
Copyright <YEAR> <COPYRIGHT HOLDER>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contributing
If you wish to contribute to this project first read the steps listed above for installation and use.  Then you may make changes or develop new features as you see fit.  I would like to add some features in the future such as: Giving the user an option to enter a custom filename for their markdown.  This would allow for the user to create markdown files for more specific aspects, pages, or sections of their project. Example: “webpage.md” or “node-module-name.md”. I would like to add more license options and even a prompt to ask the user for custom license text if needed.

## Tests
To test this application first run through all the instructions for installation and use provided above.  You do not have to enter any values whatsoever to create the README file.  You can run the “node index.js” command and just hit Enter until the prompts are finished and that will pass empty strings to each section resulting in a usable skeleton.  This is a quick way to test the app to make sure it is running smoothly.  If the app does not run and you encounter an error then look to your terminal and console for error information.  First see the installation section for instructions on how to make sure Node and its necessary modules are properly installed on your computer and within your project directory.  If Node is properly installed then copy the error message from your terminal or console and paste the copied message into a search engine to find a solution to your error.  

## Questions
For questions or concerns regarding this project or future collaborations please contact the author via GitHub at:
https://github.com/nystphens
