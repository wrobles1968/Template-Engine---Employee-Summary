const Employee= require("./Employee");

class Engineer extends Employee {
    constructor(name, id, title, github, email) {

        super(name, id, title, email);
        this.github = github;
    }
    getGithub () {
    var title = Engineer.prototype.getGithub.call(this);
    }
    }
    module.exports = Engineers;