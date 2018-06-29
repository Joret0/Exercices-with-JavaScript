function solve(array, command) {
    function sortArray(inputArray, sortedMethod) {
        let ascendingComparator = function (a, b) {
            return a - b;
        };
        let descendingComparator = function (a, b) {
            return b - a;
        };
        let sortingStrategies = {
            "asc" : ascendingComparator,
            "desc" : descendingComparator
        };

        return inputArray.sort(sortingStrategies[sortedMethod])
    }
    console.log(sortArray(array, command));
}

solve([14, 10, 4, 99, 88], "desc");