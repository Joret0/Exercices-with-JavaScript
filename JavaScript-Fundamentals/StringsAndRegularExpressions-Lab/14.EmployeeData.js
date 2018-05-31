function employeeDate(input) {
    let regex = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 \-]+)$/;

    for (let text of input) {
        let match = regex.exec(text);
        if (match) {
            console.log(`Name: ${match[1]}\nPosition: ${match[3]}\nSalary: ${match[2]}`);
        }
    }
}

employeeDate([`Jonathan - 2000 - Manager`,
`Peter- 1000- Chuck`,
`George - 1000 - Team Leader`]);