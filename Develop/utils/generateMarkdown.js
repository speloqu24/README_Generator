// function to generate markdown for README
function generateMarkdown(data) {
  return `# Project Title: ${data.title}
  
  ![License](https://img.shields.io/badge/license-${encodeURIComponent(
    data.license
  )}-green.svg)

  ## Description: 
  > *${data.description}*
  
  ## Table of Contents
  
  * [Project Description](#description)
  * [Installation Details](#installation)
  * [Usage](#usage)
  * [Contribution](#contributing)
  * [License](#license)
  * [Contact](#contact)
  
## Installation
> *${data.installation}*

## Usage
> *${data.usage}*

## Contributing
> *${data.contribution}*

## License
> This application is covered under the *${data.license}* license

## Questions
>[GitHub Profile](https://github.com/${data.github})

If you have any questions at all please don't hesitate to reach out via the contact information below. 

> |Name|GitHub|Email Address|
> |----|------|--------|
> | ${data.name} | ${data.github} | ${data.email} |

`;
}

module.exports = generateMarkdown;
