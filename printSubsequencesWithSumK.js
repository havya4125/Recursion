const printSubsequencesWithSumK = (index, arr, ans, k, sum) => {

    if (index === arr.length) {
        if (sum === k) console.log(ans);
        return;
    }

    sum += arr[index];
    ans.push(arr[index]);
    printSubsequencesWithSumK(index + 1, arr, ans, k, sum);
    sum -= arr[index];
    ans.pop();
    printSubsequencesWithSumK(index + 1, arr, ans, k, sum);
};

const arr = [3, 1, 2];
const ans = [];
let k = 5;
let sum = 0;
printSubsequencesWithSumK(0, arr, ans, k, sum)