/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.
*/

function isValid(s: string): boolean {
    const stack: string[] = [];
    const map: { [key: string]: string } = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (char in map) {
            stack.push(char);
        } else {
            const top = stack.pop();
            if (map[top] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}