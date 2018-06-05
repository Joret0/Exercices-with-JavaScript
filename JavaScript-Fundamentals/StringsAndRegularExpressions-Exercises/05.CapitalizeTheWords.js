function capitalize(input) {
    let result = input.split(' ');
    for (let i = 0; i < result.length; i++) {
        result[i] = result[i][0].toUpperCase() + result[i].substring(1).toLowerCase();
    }
    console.log(result.join(' '));
}

capitalize('Was that Easy? tRY thIs onE for SiZe!');