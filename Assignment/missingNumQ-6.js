// find missing number between 1 and 100

let missingNumBetween1_100 = function(arr){
    let n = Math.max(...arr)
    let sum = n*(n+1)/2;
    let currentSum = 0;
    for(let i =0; i<arr.length; i++){
        currentSum += arr[i];
    }
    return  sum - currentSum;
}

console.log(missingNumBetween1_100([1, 8, 7, 3, 4, 5, 6, 9, 10]));
// result: 2

// give input between 1 and 100, I just checked till 10 but works for every input
