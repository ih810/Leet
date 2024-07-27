/**
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 * 
 * Example:
 * Input: n = 3
 * Output: ["((()))","(()())","(())()","()(())","()()()"]
 * 
 * Constraints:
 * 1 <= n <= 8
 */

function generateParenthesis(n: number): string[] {
    const result: string[] = [];
    
    function backtrack(str: string, open: number, close: number) {
        if (str.length === 2 * n) {
            result.push(str);
            return;
        }
        
        if (open < n) {
            backtrack(str + '(', open + 1, close);
        }
        if (close < open) {
            backtrack(str + ')', open, close + 1);
        }
    }
    
    backtrack('', 0, 0);
    
    return result;
}

// Test cases
console.log(generateParenthesis(3)); // Output: ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(1)); // Output: ["()"]