const Intern = require('../lib/Intern.js');

test('Can set school on new call to constructor', () => {
    const testSchool = "UofWorld";
    const intern = new Intern("Dave", 23, "email@email.com", testSchool);
    expect(intern.school).toBe("UofWorld");
});

test('The getSchool method returns the school', () => {
    const testSchool = "UofWorld";
    const intern = new Intern("Dave", 23, "email@email.com", testSchool);
    expect(intern.getSchool()).toBe("UofWorld");
});

test('The getRole method returns "Intern"', () => {
    const intern = new Intern("Dave", 23, "email@email.com");
    expect(intern.getRole()).toBe("Intern");
});