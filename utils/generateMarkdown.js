// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// function that generates markdown content for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contributing](#contributing)
  6. [Tests](#tests)
  7. [Questions](#questions)

  ##Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.installation}

  ## License
  ${data.licenseBadge}
  ${data.licenseLink}
  ${data.licenseText}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}
`;
}

module.exports = generateMarkdown;
