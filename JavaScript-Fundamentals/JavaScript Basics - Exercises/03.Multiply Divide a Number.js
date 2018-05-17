function solve(nums) {
    let num1 = Number(nums[0]);
    let num2 = Number(nums[1]);
    let sum;
    if (num1 > num2) {
        sum = num1 / num2;
    } else {
        sum = num1 * num2;
    }
    console.log(sum)
}

solve(['10', '2']);