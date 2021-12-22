const Employee = require('../lib/Employee');

test("set and get employee's info as an object", () => {
    const employee = new Employee('Jim', '123', 'jim@company.com');

    expect(employee.name).toBe('Jim');
    expect(employee.id).toBe('123');
    expect(employee.email).toBe('jim@company.com');
});

test('gets employee name', () => {
    const employee = new Employee('Jim', '123', 'jim@company.com');

    expect(employee.getName()).toEqual('Jim');
});

test('gets employee id number', () => {
    const employee = new Employee('Jim', '123', 'jim@company.com');

    expect(employee.getId()).toEqual('123');
});

test('gets employee email address', () => {
    const employee = new Employee('Jim', '123', 'jim@company.com');

    expect(employee.getEmail()).toEqual('jim@company.com');
});

test("correct role is returned from getRole() \"Employee\"", () => {
    const employee = new Employee('Jim', '123', 'jim@company.com');

    expect(employee.getRole()).toEqual('Employee');
});