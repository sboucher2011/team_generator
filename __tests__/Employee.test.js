const { expect } = require('@jest/globals');
const { test } = require('picomatch');
const Employee = require('../lib/Employe');

test("gets employee's info as an object", () => {
    const employee = new Employee('Jim');

    expect(employee.getStatus()).toHaveProperty('name');
    expect(employee.getStatus()).toHaveProperty('id');
    expect(employee.getStatus()).toHaveProperty('email');
});

