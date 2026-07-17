const subsetSumI = (index, arr, output, sum) => {
    if (index === arr.length) {
        output.push(sum)
        return;
    }

    //pick
    subsetSumI(index + 1, arr, output, sum + arr[index]);

    // Don't pick
    subsetSumI(index + 1, arr, output, sum);
}

const arr = [3, 1, 2];
const output = [];
let sum = 0;
subsetSumI(0, arr, output, sum)
output.sort((a, b) => a - b);
console.log(output);

// T.C -> 2^n - visit each subset
// S.C -> 2^n - to store all the subset sums