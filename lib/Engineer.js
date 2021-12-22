const Employee = require('./Employe');

class Engineer extends Employee {
    constructor(name = '', id = '', email = '', gitHub = '') {
        super(name);
        super(id);
        super(email);
        this.gitHub = gitHub;
        this.role = 'Engineer';
    }

    getGitHub() {
        return this.gitHub;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Engineer;