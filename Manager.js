const Engineer = require("./Employee");

class Manager extends Engineer {
    constructor(name, id, title, officeNumber, email) {

        super(name, id, title, email);
        this.officeNumber = officeNumber;
    }
getRole () {
var title = Manager.prototype.getRole.call(this);
}
}
module.exports = Managers;