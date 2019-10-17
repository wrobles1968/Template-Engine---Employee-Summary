const Employee= require("./Employee");

class Intern extends Employee {
    constructor(name, id, title, school, email) {

        super(name, id, title, email);
        this.school = school;
    }
getSchool () {
var school= Intern.prototype.getSchool.call(this);
}
}
module.exports = Interns;