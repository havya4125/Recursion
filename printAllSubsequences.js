const printAllSubsequences = (index, arr, ans) => {

    if (index === arr.length) {
        console.log(ans);
        return;
    }

    ans.push(arr[index]);
    printAllSubsequences(index + 1, arr, ans);
    ans.pop();
    printAllSubsequences(index + 1, arr, ans);
}

const arr = [3, 1, 2];
const ans = [];
printAllSubsequences(0, arr, ans);