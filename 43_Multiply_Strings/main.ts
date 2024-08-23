/*
Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

Example 1:
Input: num1 = "2", num2 = "3"
Output: "6"

Example 2:
Input: num1 = "123", num2 = "456"
Output: "56088"

Constraints:
- 1 <= num1.length, num2.length <= 200
- num1 and num2 consist of digits only.
- Both num1 and num2 do not contain any leading zero, except the number 0 itself.
*/

function multiply(num1: string, num2: string): string {
    const m = num1.length, n = num2.length;
    const pos = new Array(m + n).fill(0);

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const mul = (num1.charCodeAt(i) - '0'.charCodeAt(0)) * (num2.charCodeAt(j) - '0'.charCodeAt(0));
            const p1 = i + j, p2 = i + j + 1;
            const sum = mul + pos[p2];

            pos[p1] += Math.floor(sum / 10);
            pos[p2] = sum % 10;
        }
    }

    let result = '';
    for (let p of pos) {
        if (!(result.length === 0 && p === 0)) {
            result += p;
        }
    }

    return result.length === 0 ? '0' : result;
}