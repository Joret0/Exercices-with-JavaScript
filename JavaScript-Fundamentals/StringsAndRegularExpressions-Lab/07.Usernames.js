function userNames(input) {
    let users = [];

    for (let i = 0; i < input.length; i++) {
        let infoMail = input[i].split('@');
        let user = infoMail[0] + '.';
        let mail = infoMail[1].split('.');
        for (let j = 0; j < mail.length; j++) {
            user += mail[j][0];
        }
        users.push(user);
    }
    console.log(users.join(", "));
}

userNames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);