const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test("set and get manager's info as an object", () => {
    const manager = new Manager('Jim', '123', 'jim@company.com', '123-456-7890');

    expect(manager.name).toBe('Jim');
    expect(manager.id).toBe('123');
    expect(manager.email).toBe('jim@company.com');
    expect(manager.officeNumber).toBe('123-456-7890');
});

test("correct role is returned from getRole() \"Manager\"", () => {
    const manager = new Manager('Jim', '123', 'jim@company.com', '123-456-7890');

    expect(manager.getRole()).toEqual('Manager');
});