const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "name",
    message: "Full Name",
  },
  { type: "input", name: "github", message: "Enter your GITHUB username" },
  { type: "input", name: "email", message: "Please enter your email address" },
  {
    type: "input",
    name: "title",
    message: "Project Title",
  },
  {
    type: "input",
    name: "description",
    message: "Project Description",
  },
  {
    type: "input",
    name: "deployment",
    message: "What is the link to the deployed application?",
  },
  {
    type: "input",
    name: "installation",
    message: "Project installation instructions",
  },
  {
    type: "input",
    name: "contribution",
    message: "Are there any contribution guidelines for your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "Please describe how this project can be used",
  },
  {
    type: "list",
    name: "license",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "NONE"],
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
  });
}

// function to initialize program - kicks off questions
function init() {
  inquirer
    .prompt(questions)
    .then((response) => writeToFile("README.md", generateMarkdown(response)));
}

// function call to initialize program
init();
