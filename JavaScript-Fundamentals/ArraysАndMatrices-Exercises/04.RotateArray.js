function rotateArray(input) {
    let n = Number(input.pop());

    for (let i = 0; i < n; i++) {
        let element = input.pop();
        input.unshift(element);
    }
    console.log(input.join(" "));
}

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);