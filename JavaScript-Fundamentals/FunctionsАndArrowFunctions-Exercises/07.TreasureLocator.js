function treasureLocator(args) {
    let tuvalue = {x1: 1, x2: 3, y1: 1, y2: 3};
    let tokelau = {x1: 8, x2: 9, y1: 0, y2: 1};
    let samoa = {x1: 5, x2: 7, y1: 3, y2: 6};
    let tonga = {x1: 0, x2: 2, y1: 6, y2: 8};
    let cook = {x1: 4, x2: 9, y1: 7, y2: 8};


    function isOnTheIsland(x, y) {
        if ((x >= tuvalue.x1 && x <= tuvalue.x2) && (y >= tuvalue.y1 && y <= tuvalue.y2)) {
            return "Tuvalu";
        } else if ((x >= tokelau.x1 && x <= tokelau.x2) && (y >= tokelau.y1 && y <= tokelau.y2)) {
            return "Tokelau";
        } else if ((x >= samoa.x1 && x <= samoa.x2) && (y >= samoa.y1 && y <= samoa.y2)) {
            return "Samoa";
        } else if ((x >= tonga.x1 && x <= tonga.x2) && (y >= tonga.y1 && y <= tonga.y2)) {
            return "Tonga";
        } else if ((x >= cook.x1 && x <= cook.x2) && (y >= cook.y1 && y <= cook.y2)) {
            return "Cook";
        }
        return "On the bottom of the ocean";
    }

    for (let i = 0; i < args.length; i+=2) {
        let x = args[i];
        let y = args[i + 1];
        
        let message = isOnTheIsland(x, y);
        console.log(message);
    }
}

treasureLocator([4, 2, 1.5, 6.5, 1, 3]);