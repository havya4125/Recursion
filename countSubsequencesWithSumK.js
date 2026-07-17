const countSubsequencesWithSumK = (index, arr, ans, k, sum) => {
    if (index === arr.length) {
        if (sum === k) return 1;
        return 0;
    }
    sum += arr[index];
    ans.push(arr[index]);
    let take = countSubsequencesWithSumK(index + 1, arr, ans, k, sum);
    sum -= arr[index];
    ans.pop();
    let nontake = countSubsequencesWithSumK(index + 1, arr, ans, k, sum);
    return take + nontake;
}

const arr = [3, 1, 2];
const ans = [];
let k = 3;
let sum = 0;

let count = countSubsequencesWithSumK(0, arr, ans, k, sum);
console.log(count);