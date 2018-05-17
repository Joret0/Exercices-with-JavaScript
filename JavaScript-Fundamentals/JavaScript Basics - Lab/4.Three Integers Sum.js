function sum(args) {
    let nums = args[0].split(' ');
    let firstNum = Number(nums[0]);
    let secondNum = Number(nums[1]);
    let thirdNum = Number(nums[2]);
    console.log(
        check(firstNum, secondNum, thirdNum) ||
        check(firstNum, thirdNum, secondNum) ||
        check(secondNum, thirdNum, firstNum) ||
        'No');

    function check(firstNum, secondNum, thirdNum) {
        if (firstNum + secondNum != thirdNum) {
            return false;
        }

        if (firstNum > secondNum){
            [firstNum, secondNum] = [secondNum, firstNum];
        }

        return `${firstNum} + ${secondNum} = ${thirdNum}`;
    }
}

