
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {

    let size = nums.length;
    const multiplied = new Array(size).fill(1);

    let product = 1;
    for (let i = 1; i < size; i++) {
        product *= nums[i - 1];
        multiplied[i] = product;
    }


    product = 1;
    for (let i = size - 2; i >= 0; i--) {
        product *= nums[i + 1];
        multiplied[i] *= product;
    }

    return multiplied;
};
