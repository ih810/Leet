/*
Given a string containing just the characters '(', ')', return the length of the longest valid (well-formed) parentheses substring.
*/

function longestValidParentheses(s: string): number {
    let maxLen = 0;
    const stack: number[] = [-1];
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length === 0) {
                stack.push(i);
            } else {
                maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
            }
        }
    }
    
    return maxLen;
}