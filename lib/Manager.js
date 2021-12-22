const Employee = require('./Employe');

class Manager extends Employee {
    constructor(name = '', id = '', email = '', officeNumber = '') {
        super(name);
        super(id);
        super(email);
        this.officeNumber = officeNumber;
        this.role = 'Engineer';
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Manager;