/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const findPermutations = (ds, nums, output, map) => {
    if (ds.length === nums.length) {
        output.push([...ds])
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            ds.push(nums[i]);
            map.set(nums[i], 1);
            findPermutations(ds, nums, output, map);
            ds.pop();
            map.delete(nums[i]);
        }
    }
};

var permute = function (nums) {
    const map = new Map();
    const output = [];
    findPermutations([], nums, output, map);
    return output;
};

// Time: O(n! * n) -> The recursion with the for loop generates n! permutations, and copying each permutation into the output takes O(n).
// // Space: O(n) auxiliary (recursion stack + visited array/map); O(n! * n) including the output array.