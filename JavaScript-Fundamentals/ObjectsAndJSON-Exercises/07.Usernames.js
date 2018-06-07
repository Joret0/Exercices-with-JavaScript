function userNames(input) {
    let set = new Set();

    for (let user of input) {
        set.add(user);
    }

    function sortSet(a, b) {
        if (a.length - b.length === 0) {
            return a.localeCompare(b);
        }
        return a.length - b.length;
    }

    set = Array.from(set).sort((a, b) => sortSet(a, b));

    for (let user of set) {
        console.log(user);
    }
}

userNames(['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston']);