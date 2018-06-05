function splitString(string, delimiter) {
    let result = string.split(delimiter);
    result.forEach(e => console.log(e))
}

splitString('One-Two-Three-Four-Five', '-');