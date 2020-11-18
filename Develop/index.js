const inquirer = require("inquirer");
const fs = require("fs");
// const util = require("util");

const generateMarkdown = require("./utils/generateMarkdown.js");
// const writeToFile = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
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
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "NONE"],
  },
];

// This function works, and generates the questions in the terminal by running node index.js

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error, data) =>
    error ? console.error(error) : console.log(data)
  );
}

// // dynamically create the README
// const generateReadMe = (response) =>

// function to initialize program - kicks off questions
function init() {
  inquirer
    .prompt(questions)
    .then((response) => writeToFile("README.md", generateMarkdown(response)));
}

// function call to initialize program
init();
