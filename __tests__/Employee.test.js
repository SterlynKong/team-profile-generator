const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee("Dave", 23, "email@email.com");
  
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.name).toEqual(expect.any(String));
});