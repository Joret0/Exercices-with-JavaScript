function heroicInventory(input) {
    let array = [];
    for (let i = 0; i < input.length; i++) {
        let arr = input[i].split("/").filter(w => w !== "");
        let itemsArr;
        if (arr[2] === undefined) {
            itemsArr = [];
        } else {
            itemsArr = arr[2].trim().split(", ").filter(w => w !== "");
        }
        let obj = {
            name : arr[0].trim(),
            level : Number(arr[1].trim()),
            items : itemsArr
        };
        array.push(obj);
    }
    console.log(JSON.stringify(array));
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);