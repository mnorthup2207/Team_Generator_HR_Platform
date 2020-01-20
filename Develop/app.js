// Keep these lines; they're important!
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const outputPath = path.resolve(__dirname, "output", "team.html");

const render = require("./lib/htmlRenderer");
// first function kicking off first question
async function start() {
    let team = "";
    let name;
    let id;
    let title;
    let email;
    //first question
    await inquirer.prompt([
        {
            type: "list",
            message: "Which member of staff would you like to add?",
            choices: ["Manager", "Engineer", "Intern"],
            name: "title"
        },
        {
            type: "input",
            message: `Please enter the new employee's name.`,
            name: "name"
        },
        {
            type: "input",
            message: `Please enter the new employee's I.D. Number.`,
            name: "id"
        },
        {
            type: "input",
            message: `Please enter the new employee's email`,
            name: "email"
        },
    ]).then(response => {
        title = response.title;
        name = response.name;
        id = response.id;
        email = response.email;
    })

    switch (title) {
        case "Manager":
            await inquirer.prompt([
                {
                    type: "input",
                    message: "Please enter the new Manager's office room number.",
                    name: "officeRoomNum"
                },
                {
                    type: "list",
                    message: "Do you want to enter an additional team member?",
                    choices: ["Yes, add another member", "No, that's everyone"],
                    name: "addTeamMember"
                }
            ]).then(response => {
                const manager = new Manager(name, id, email, response.officeRoomNum);
                associate = fs.readFileSync("templates/manager.html");
                team = team + "\n" + eval('`' + associate + '`');
                if (response.addTeamMember === "Yes, add another member") {
                    start()
                } else {
                    console.log("Your team info has been successfully recorded");

                }
            });
            break;
        case "Intern":
            await inquirer.prompt([
                {
                    type: "input",
                    message: "Please enter the new Intern's school name.",
                    name: "school"
                },
                {
                    type: "confirm",
                    message: "Do you want to enter an additional team member?",
                    name: "addTeamMember"
                }
            ]).then(response => {
                const intern = new Intern(name, id, email, response.school);
                associate = fs.readFileSync("templates/intern.html");
                team = team + "\n" + eval('`' + associate + '`');
                if (response.addTeamMember === "Yes, add another member") {
                    start()
                } else {
                    console.log("Your team info has been successfully recorded");

                }
            });
            break;
        case "Engineer":
            await inquirer.prompt([
                {
                    type: "input",
                    message: "Please enter the new Engineer's GutHub Account.",
                    name: "github"
                },
                {
                    type: "confirm",
                    message: "Do you want to enter an additional team member?",
                    name: "addTeamMember"
                }
            ]).then(response => {
                const engineer = new Engineer(name, id, email, response.github);
                associate = fs.readFileSync("templates/engineer.html");
                team = team + "\n" + eval('`' + associate + '`');
                if (response.addTeamMember === "Yes, add another member") {
                    start()
                } else {
                    console.log("Your team info has been successfully recorded");

                }
            });
            break;
    }


}
start()




// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!

