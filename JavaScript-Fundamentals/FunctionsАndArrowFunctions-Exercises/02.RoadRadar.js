function roadRadar(args) {
    let speed = args[0];
    let zone = args[1];
    let zoneLimit = getLimit(zone);
    let infraction = getInfraction(speed, zoneLimit);
    if (infraction) {
        console.log(infraction);
    }

    function getInfraction(speed, zoneLimit) {
        let overSpeed = speed - zoneLimit;
        if (overSpeed <= 0) {
            return false;
        } else {
            if (overSpeed <= 20) {
                return "speeding";
            } else if (overSpeed <= 40 && overSpeed > 20) {
                return "excessive speeding";
            } else {
                return "reckless driving";
            }
        }
    }

    function getLimit(zone) {
        switch (zone.toLowerCase()) {
            case 'motorway':
                return 130;
            case 'interstate':
                return 90;
            case 'city':
                return 50;
            case 'residential':
                return 20;
        }
    }
}

roadRadar([21, `residential`]);