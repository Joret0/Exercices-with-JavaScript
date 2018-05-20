function moviePrices(args) {

    switch (args[0].toLowerCase()) {
        case "the godfather":
        switch (args[1].toLowerCase()) {
            case "monday":
                console.log(12);
                break;
            case "tuesday":
                console.log(10);
                break;
            case "wednesday":
                console.log(15);
                break;
            case "thursday":
                console.log(12.50);
                break;
            case "friday":
                console.log(15);
                break;
            case "saturday":
                console.log(25);
                break;
            case "sunday":
                console.log(30);
                break;
            default:
                console.log("error");
        }
        break;
        case "schindler's list":
            switch (args[1].toLowerCase()) {
                case "monday":
                    console.log(8.5);
                    break;
                case "tuesday":
                    console.log(8.5);
                    break;
                case "wednesday":
                    console.log(8.5);
                    break;
                case "thursday":
                    console.log(8.5);
                    break;
                case "friday":
                    console.log(8.5);
                    break;
                case "saturday":
                    console.log(15);
                    break;
                case "sunday":
                    console.log(15);
                    break;
                default:
                    console.log("error");
            }
            break;
        case "casablanca":
            switch (args[1].toLowerCase()) {
                case "monday":
                    console.log(8);
                    break;
                case "tuesday":
                    console.log(8);
                    break;
                case "wednesday":
                    console.log(8);
                    break;
                case "thursday":
                    console.log(8);
                    break;
                case "friday":
                    console.log(8);
                    break;
                case "saturday":
                    console.log(10);
                    break;
                case "sunday":
                    console.log(10);
                    break;
                default:
                    console.log("error");
            }
            break;
        case "the wizard of oz":
            switch (args[1].toLowerCase()) {
                case "monday":
                    console.log(10);
                    break;
                case "tuesday":
                    console.log(10);
                    break;
                case "wednesday":
                    console.log(10);
                    break;
                case "thursday":
                    console.log(10);
                    break;
                case "friday":
                    console.log(10);
                    break;
                case "saturday":
                    console.log(15);
                    break;
                case "sunday":
                    console.log(15);
                    break;
                default:
                    console.log("error");
            }
            break;
        default:
            console.log("error");
    }
}

moviePrices(['The Godfather', 'Friday']);