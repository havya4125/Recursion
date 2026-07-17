/*
 * Intuition:
 *
 * - Sort the array so that duplicate elements are adjacent.
 * - At each recursive call, try choosing every possible element starting from the current index.
 * - Once an element is chosen, move to the next index since each element can be used only once.
 * - Skip duplicate elements at the same recursion level to avoid generating duplicate combinations.
 * - If the target becomes 0, a valid combination is found. Backtrack and explore other possibilities.
 */

const combinationSumII = (index, arr, ds, target, output) => {
    if (target === 0) {
        output.push([...ds]);
        return;
    }
    for (let i = index; i < arr.length; i++) {
        if (i > index && arr[index] === arr[index - 1]) continue;
        if (arr[i] > target) break;
        ds.push(arr[i]);
        combinationSumII(index + 1, arr, ds, target, output);
        ds.pop();
    }
};

const arr = [10, 1, 2, 7, 6, 1, 5];
arr.sort();
const target = 8;
const ds = [];
const output = [];
combinationSumII(0, arr, ds, target, output);