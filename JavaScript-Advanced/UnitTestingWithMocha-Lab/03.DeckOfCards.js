function printDeckOfCards(arr) {
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suits = ['H', 'S', 'D', 'C'];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let face = arr[i].substring(0, arr[i].length - 1);
        let suit = arr[i].substr(-1);
        if (!faces.includes(face) || !suits.includes(suit)) {
            console.log(`Invalid card: ${arr[i]}`);
            return;
        }
        switch (suit) {
            case 'S':
               suit = "\u2660";
                break;
            case 'H':
                suit = "\u2665";
                break;
            case 'D':
                suit = "\u2666";
                break;
            case 'C':
                suit = "\u2663";
                break;
        }
        let card = face + suit;
        result.push(card);
    }
    console.log(result.join(", "));
}

printDeckOfCards(['3D', 'JC', '2S', '10H', '5X']);