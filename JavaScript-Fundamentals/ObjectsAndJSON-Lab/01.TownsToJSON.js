function townToJSON(input) {
    let array = [];
    for (let town of input.slice(1)) {
        let [empty, townName, lat, lon] = town.split(/\s*\|\s*/);
        let obj = {Town: townName, Latitude: Number(lat), Longitude: Number(lon)};
        array.push(obj);
    }
    console.log(JSON.stringify(array))
}

townToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);