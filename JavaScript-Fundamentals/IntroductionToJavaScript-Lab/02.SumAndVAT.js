function sumAndVat(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    let vat = (sum / 100) * 20;
    let total = sum + vat;
    console.log(`sum = ${sum}`);
    console.log(`VAT = ${vat}`);
    console.log(`total = ${total}`);
}

sumAndVat([1.20, 2.60, 3.50]);
