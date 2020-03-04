const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("../lib/htmlRenderer");
​
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

​const employeeList = []
​
​
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// Prompt for manager
// Create manager questions array
// Create a function to display questions
// Push to HTML(?)

const mgrQuestions = [
        {
            type: "input",
            name: "mgrName",
            message: "Welcome Manager. Please enter your name:"
        },
        {
            type: "input",
            name: "id",
            message: "Please enter your ID Number:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address:"
        },
        {
            type: "input",
            name: "office",
            message: "Your office number:"
        }
    ];

// Ask if they would like to add any more employees
// List: Engineer, Intern, no more employees

// if "engineer" is selected, run through this array:
const engQuestions = [
    {
        type: "input",
        name: "name",
        message: "Engineer's name:"
    },
    {
        type: "input",
        name: "id",
        message: "Engineer's ID number:"    
    },
    {
        type: "input",
        name: "email",
        message: "Engineer's email:"
    },
    {
        type: "input",
        name: "github",
        message: "Engineer's GitHub username:"
    }
]

// Then push to array (render HTML?)

// if Intern is selected, run through this array:
const intQuestions = [
    {
        type: "input",
        name: "name",
        message: "Intern's name:"
    },
    {
        type: "input",
        name: "id",
        message: "Intern's ID number:"    
    },
    {
        type: "input",
        name: "email",
        message: "Intern's email:"
    },
    {
        type: "input",
        name: "github",
        message: "Intern's School:"
    }
]


async function init() {
//     try {
//         const answers = await autoReadMePrompt();

//         const userData = api.getUser(answers.githubID.avatar_url);

//         const doc = generateMarkdown(answers);

//         await writeFileAsync("readme-demo.md", doc);

//      } catch (err) {
//         console.log(err);
//     }
// }
}
init();
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
​
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
​
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
​
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
