function findVariable(input) {
    let regex = /_[a-zA-Z0-9]+/g;
    let result = [];
    let array;
    while ((array = regex.exec(input)) !== null){
        result.push(array[0].substring(1));
        regex.lastIndex;
    }
    console.log(result.join(','));
}

findVariable('The _id and _age variables are both integers.');