const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("./lib/htmlRenderer");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const teamList = [];

// async Await - instead of .then LOOK THIS UP
// REFER TO NODE PORTFOLIO HOMEWORK
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// Prompt for manager; manager questions array

inquirer.prompt([
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
        name: "officeNumber",
        message: "Enter your office number:"
    }
])
    // after manager is created, add them to the employee directory
    .then(answers => {
        console.log("Thank you");
        const manager = new Manager(answers.mgrName, answers.id, answers.email, answers.officeNumber);
        teamList.push(manager);

        // Then, ask the manager which employee they would like to add
        //    Must be done within the previous function or the prompts all run at the same time!
        addEmployee();
    })

function addEmployee() {
    inquirer.prompt([
        {
            type: "list",
            name: "addEmployee",
            message: "Which employee would you like to add?",
            choices: [
                "Engineer",
                "Intern",
                "I'm done adding employees."
            ]
        }
        // selects next employee
    ]).then(nextEmployee => {
        switch (nextEmployee.addEmployee) {
            // in case userChoice
            case "Manager":
                addManager();
                break;

            case "Engineer":
                addEngineer();
                break;

            case "Intern":
                addIntern();
                break;

            case "I'm done adding employees.":
                template = render(teamList);
                    fs.writeFile(outputPath, template, err => {
                    if (err) {
                      console.log(err)
                      return
                    } else {
                        console.log("file written successfully")
                    }
                })
        }
    })
}

// if "engineer" is selected, run through this array:
function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engName",
            message: "Engineer's name:"
        },
        {
            type: "input",
            name: "engId",
            message: "Engineer's ID number:"
        },
        {
            type: "input",
            name: "engEmail",
            message: "Engineer's email:"
        },
        {
            type: "input",
            name: "github",
            message: "Engineer's GitHub username:"
        }
    ]).then(answers => {
        console.log("Engineer Added");
        const engineer = new Engineer(answers.engName, answers.engId, answers.engEmail, answers.github);
        teamList.push(engineer);
        addEmployee();
    })
};

// if Intern is selected, run through this array:
function addIntern() {
inquirer.prompt([
    {
        type: "input",
        name: "intName",
        message: "Intern's name:"
    },
    {
        type: "input",
        name: "intId",
        message: "Intern's ID number:"
    },
    {
        type: "input",
        name: "intEmail",
        message: "Intern's email:"
    },
    {
        type: "input",
        name: "school",
        message: "Intern's School:"
    }
]).then(answers => {
    console.log("Intern added");
    const intern = new Intern(answers.intName, answers.intId, answers.intEmail, answers.school);
    teamList.push(intern);
    addEmployee();
})
};
//Do I need this? 
module.exports = teamList

// // // After the user has input all employees desired, call the `render` function required
// // // above and pass in an array containing all employee objects; the `render` function will
// // // generate and return a block of HTML including templated divs for each employee!

// Not sure how to do this?

// // // After you have your html, you're now ready to create an HTML file using the HTML
// // // returned from the `render` function. Now write it to a file named `team.html` in the
// // `output` folder. You can use the variable `outputPath` above target this location.
// // Hint: you may need to check if the `output` folder exists and create it if it
// // does not.

// // HINT: each employee type (manager, engineer, or intern) has slightly different
// // information; write your code to ask different questions via inquirer depending on
// // employee type.

// // HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// // and Intern classes should all extend from a class named Employee; see the directions
// // for further information. Be sure to test out each class and verify it generates an 
// // object with the correct structure and methods. This structure will be crucial in order
// // for the provided `render` function to work!```