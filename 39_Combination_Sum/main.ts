/*
Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.
The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.
The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
*/

function combinationSum(candidates: number[], target: number): number[][] {
    const result: number[][] = [];
    
    const backtrack = (current: number[], remaining: number, start: number) => {
        if (remaining < 0) return;
        if (remaining === 0) {
            result.push([...current]);
            return;
        }
        
        for (let i = start; i < candidates.length; i++) {
            current.push(candidates[i]);
            backtrack(current, remaining - candidates[i], i);
            current.pop();
        }
    };
    
    backtrack([], target, 0);
    
    return result;
}