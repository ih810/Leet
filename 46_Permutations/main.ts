/*
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
*/

function permute(nums: number[]): number[][] {
    const result: number[][] = [];
    
    const backtrack = (current: number[], remaining: number[]) => {
        if (remaining.length === 0) {
            result.push([...current]);
            return;
        }
        
        for (let i = 0; i < remaining.length; i++) {
            current.push(remaining[i]);
            const newRemaining = remaining.filter((_, index) => index !== i);
            backtrack(current, newRemaining);
            current.pop();
        }
    };
    
    backtrack([], nums);
    
    return result;
}

// Test cases
console.log(permute([1, 2, 3])); // Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(permute([0, 1])); // Output: [[0,1],[1,0]]
console.log(permute([1])); // Output: [[1]]