const findSubsets = (index, ds, output, nums) => {
    output.push([...ds]);

    for (let i = index; i < nums.length; i++) {
        if (i > index && nums[i] === nums[i - 1]) continue;

        ds.push(nums[i]);
        findSubsets(i + 1, ds, output, nums);
        ds.pop();
    }
}

var subsetsWithDup = function (nums) {
    nums.sort((a, b) => a - b);

    const output = [];
    findSubsets(0, [], output, nums);

    return output;
};

//Time: O(2^n * n) -> Generates all 2^n subsets (worst case) and copies each subset (O(n)) into the output.
// S.C : O(2^n * n) -> space required to store all subsets 