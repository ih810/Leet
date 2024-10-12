/*
The set [1, 2, 3, ..., n] contains a total of n! unique permutations.
Given n and k, return the kth permutation sequence.
*/

function getPermutation(n: number, k: number): string {
    let nums: number[] = Array.from({ length: n }, (_, index) => index + 1);
    let factorial = 1;
    let result = '';

    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }

    k--;

    for (let i = 0; i < n; i++) {
        factorial /= n - i;
        let index = Math.floor(k / factorial);
        result += nums[index].toString();
        nums.splice(index, 1);
        k %= factorial;
    }

    return result;
}

// Test cases
console.log(getPermutation(3, 3)); // Output: "213"
console.log(getPermutation(4, 9)); // Output: "2314"
console.log(getPermutation(3, 1)); // Output: "123"