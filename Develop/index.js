const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeToFile = util.promisify(fs.writeFile);

// array of questions for user
const questions = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "project_title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "project_description",
      message: "Enter your project description:",
    },
    {
      type: "input",
      name: "installation",
      message: "Enter project installation instructions",
    },
    {
      type: "input",
      name: "contribution",
      message: "Are there any contribution guidelines for your project?",
    },
    {
      type: "checkbox",
      name: "license",
      choices: ["this", "that"],
    },
  ]);

// This function works, and generates the questions in the terminal by running node index.js
questions();
//   .then ((response) => writeToFile("README.md",))
// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
