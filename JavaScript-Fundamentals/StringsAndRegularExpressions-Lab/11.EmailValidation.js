function emailValidation(input) {
    let regex = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/g;
    if (regex.test(input)) {
        console.log("Valid");
    } else {
        console.log("Invalid");
    }
}

emailValidation('valid@email.bg');
emailValidation('invalid@emai1.bg');