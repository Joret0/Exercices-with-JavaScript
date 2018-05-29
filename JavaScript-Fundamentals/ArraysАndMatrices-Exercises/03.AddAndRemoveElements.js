function addRemove(input) {
    let num = 1;
    let array = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'add') {
            array.push(num++);
        } else if (input[i] === 'remove') {
            array.pop();
            num++
        }
    }

    if (array.length !== 0) {
        for (let num of array) {
            console.log(num);
        }
    } else {
        console.log("Empty");
    }
}

addRemove(['add', 'add', 'remove', 'add', 'add']);