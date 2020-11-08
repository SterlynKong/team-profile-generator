const Manager = require('../lib/Manager.js');

test('Can set officeNumber on new call to constructor', () => {
    const testOffice = 50;
    const manager = new Manager("Dave", 23, "email@email.com", testOffice);
    expect(manager.officeNumber).toBe(testOffice);
});

test('The getRole method returns "Manager"', () => {
    const manager = new Manager("Dave", 23, "email@email.com");
    expect(manager.getRole()).toBe("Manager");
});