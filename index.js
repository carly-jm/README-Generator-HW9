const generateMarkdown = require("./utils/generateMarkdown");
const generateLICENSE = require("./utils/generateLICENSE")
const inquirer = require('inquirer')
const fs = require('fs')

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a short description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Please include any required installation commands.",
        default: "npm install"
    },
    {
        type: "input",
        name: "usage",
        message: "What command is needed to invoke this application?",
        default: "node index.js"
    },
    {
        type: "list",
        name: "contributing",
        message: "Include standard contribution guidelines?",
        choices: ["Yes", "No"],
        default: "Yes"
    },
    {
        type: "input",
        name: "tests",
        message: "Please include any test commands.",
        default: "npm run test"
    },
    {
        type: "list",
        name: "license",
        message: "Which of the following licenses should be included?",
        choices: ["MIT", "None"],
        default: "MIT"
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub user name?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },    
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            console.log(err)
        } else {
            console.log("Successful!")            
        }
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
        writeToFile("LICENSE.txt", generateLICENSE(data))
        console.log(data)
    })
}

// function call to initialize program
init();