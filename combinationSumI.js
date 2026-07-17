// Problem Statement: Given an array of distinct positive integers and a target, find all unique combinations where the chosen numbers sum to the target.
// ex: candidates = [2,3,6,7], target = 7      ans: [[2,2,3],[7]]

const combinationSumI = (index, arr, ds, target, output) => {
    if (target === 0) {
        output.push([...ds]);
    }
    if (index === arr.length) {
        return;
    }
    if (target >= arr[index]) {
        ds.push(arr[index]);
        combinationSumI(index, arr, ds, target - arr[index], output);
        ds.pop()
    }
    combinationSumI(index + 1, arr, ds, target, output);
};

const arr = [2, 3, 6, 7];
const target = 7;
const ds = [];
const output = [];
combinationSumI(0, arr, ds, target, output);