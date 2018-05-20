function imperialUnits(inches) {
    let foot = 0;
    while (inches >= 12) {
        inches -= 12;
        foot++;
    }
    console.log(`${foot}'-${inches}"`);
}

imperialUnits(36);