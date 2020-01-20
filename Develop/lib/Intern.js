// The Intern class `extends` from Employee, and should have these additional properties/behaviors:
const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school
    }
    getSchool(){
        return this.school
    }
    getRole(){
        return "Intern"
    }
}

module.exports = Intern

