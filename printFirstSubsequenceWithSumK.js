const printFirstSubsequenceWithSumK = (index, arr, ans, k, sum) => {

    if (index === arr.length) {
        if (sum === k) {
            console.log(ans);
            return true;
        }
        return false;
    }
    sum += arr[index];
    ans.push(arr[index]);
    let take = printFirstSubsequenceWithSumK(index + 1, arr, ans, k, sum);
    if (take) return true;
    sum -= arr[index];
    ans.pop();
    let nontake = printFirstSubsequenceWithSumK(index + 1, arr, ans, k, sum);
    if (nontake) return true;
    return false;
}

const arr = [3, 1, 2];
const ans = [];
let k = 3;
let sum = 0;
printFirstSubsequenceWithSumK(0, arr, ans, k, sum);