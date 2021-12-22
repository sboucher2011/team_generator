const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test("set and get engineer's info as an object", () => {
    const engineer = new Engineer('Jim', '123', 'jim@company.com', 'jimGIT');

    expect(engineer.name).toBe('Jim');
    expect(engineer.id).toBe('123');
    expect(engineer.email).toBe('jim@company.com');
    expect(engineer.github).toBe('jimGIT');
});

test("Engineers github username is returned", () => {
    const engineer = new Engineer('Jim', '123', 'jim@company.com', 'jimGIT');

    expect(engineer.getGithub()).toEqual('jimGIT');
});

test("correct role is returned from getRole() \"Engineer\"", () => {
    const engineer = new Engineer('Jim', '123', 'jim@company.com', 'jimGIT');

    expect(engineer.getRole()).toEqual('Engineer');
});