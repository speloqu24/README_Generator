// function to generate markdown for README
function generateMarkdown(data) {
  return `# ![License](https://img.shields.io/badge/license-${encodeURIComponent(
    data.license
  )}-green.svg) Title: ${data.title}
  
  >Deployed Application: ${data.deployment}

  
  ## Table of Contents
  
  * [Project Description](#description)
  * [Installation Details](#installation)
  * [Usage](#usage)
  * [Contribution](#contributing)
  * [License](#license)
  * [Questions](#questions)
  
  ## Description
  ***
  > *${data.description}*

## Installation
***
> Instructions: ${data.installation}
>
> *To begin install please head on over to the repo found in the [Questions](#questions) section of this README*


## Usage
***
> ${data.usage}

## Contribution
***
> ${data.contribution}

## License
***
> This application is covered under the *${data.license}* license

## Questions
***
>*If you have any questions at all please don't hesitate to review the repo or email me directly*
>
>  [![Generic badge](https://img.shields.io/badge/Github-dodgerblue.svg)](https://github.com/${
    data.github
  })
> [![Generic badge](https://img.shields.io/badge/Email-dodgerblue.svg)](mailto:${
    data.email
  })



`;
}

module.exports = generateMarkdown;
