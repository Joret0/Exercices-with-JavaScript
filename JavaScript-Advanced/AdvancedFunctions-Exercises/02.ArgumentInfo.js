function argumentInfo() {
    let summary = {};
    for (let argument of arguments) {
        let type = typeof argument;
        console.log(type + ": " + argument);

        if (!summary[type]) {
            summary[type] = 1;
        } else {
            summary[type]++;
        }
    }
    let sorted = Object.keys(summary).sort((a,b) => {
        return summary[b] - summary[a];
    });
    for (let key of sorted) {
        console.log(key + " = " + summary[key]);
    }
}

argumentInfo('cat', 42, function () {console.log('Hello world!');});