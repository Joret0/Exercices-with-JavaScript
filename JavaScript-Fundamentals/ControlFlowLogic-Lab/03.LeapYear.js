function leapYear(year) {

    let result = ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
    
    if (result) {
        console.log("yes");   
    } else {
        console.log("no");
    }
}

leapYear(2000);