const { expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test("set and get intern's info as an object", () => {
    const intern = new Intern('Jim', '123', 'jim@company.com', 'FIT');

    expect(intern.name).toBe('Jim');
    expect(intern.id).toBe('123');
    expect(intern.email).toBe('jim@company.com');
    expect(intern.school).toBe('FIT');
});

test("Interns school is returned", () => {
    const intern = new Intern('Jim', '123', 'jim@company.com', 'FIT');

    expect(intern.getSchool()).toEqual('FIT');
});

test("correct role is returned from getRole() \"Intern\"", () => {
    const intern = new Intern('Jim', '123', 'jim@company.com', 'FIT');

    expect(intern.getRole()).toEqual('Intern');
});