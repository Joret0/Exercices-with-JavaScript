function solve(nums) {
    let num1 = Number(nums[0]);
    let num2 = Number(nums[1]);
    let num3 = Number(nums[2]);
    let total = num1 * num2 * num3;
    if (total >= 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }
}
