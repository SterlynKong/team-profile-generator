const Engineer = require('../lib/Engineer.js');

test('Can set GitHub account on new call to constructor', () => {
    const testGit = "GitHubUser";
    const engineer = new Engineer("Dave", 23, "email@email.com", testGit);
    expect(engineer.github).toBe(testGit);
});

test('The getRole method returns "Engineer"', () => {
    const engineer = new Engineer("Dave", 23, "email@email.com", "GitHubUser");
    expect(engineer.getRole()).toBe("Engineer");
});

test('The getGitHub method returns GitHub Username', () => {
    testGit = "GitHubUser";
    const engineer = new Engineer("Dave", 23, "email@email.com", testGit);
    expect(engineer.getGithub()).toBe("GitHubUser");
});