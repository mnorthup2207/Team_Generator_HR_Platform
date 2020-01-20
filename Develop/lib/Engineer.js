// The Engineer class `extends` from Employee, and should have these additional properties/behaviors:
const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }
    getGithub() {
        return this.github
    }
    getRole() {
        return "Engineer"
    }
}


module.exports = Engineer
