function filterByAge(args) {

    let minimumAge = Number(args[0]);
    let person = {};
    person.name = args[1];
    person.age = Number(args[2]);
    let person2 = {};
    person2.name = args[3];
    person2.age = Number(args[4]);
    let array = [person, person2];
    if (person.age > person2.age) {
        array = [person2, person];
    }
    for (let i = 0; i < array.length; i++) {
        if (minimumAge <= array[i].age) {
            console.log(array[i]);
        }
    }
}

filterByAge([12,"Ivan", 15, "Asen", 9]);