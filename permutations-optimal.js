/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const findPermute = (index, nums, output) => {
    if (index === nums.length) {
        output.push([...nums]);
        return;
    }

    for (let i = index; i < nums.length; i++) {
        [nums[index], nums[i]] = [nums[i], nums[index]];
        findPermute(index + 1, nums, output);
        [nums[index], nums[i]] = [nums[i], nums[index]];
    }
};

var permute = function (nums) {
    const output = [];
    findPermute(0, nums, output);
    return output;
};

// T.C -> O(n! * n)
// S.C -> O(1) (auxilary space: O(n), output space : O(n! * n))