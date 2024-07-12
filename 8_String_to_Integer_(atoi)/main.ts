/*
Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

The algorithm for myAtoi(string s) is as follows:
1. Whitespace: Ignore any leading whitespace (" ").
2. Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity is neither present.
3. Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
4. Rounding: If the integer is out of the 32-bit signed integer range [-2^31, 2^31 - 1], then round the integer to remain in the range. Specifically, integers less than -2^31 should be rounded to -2^31, and integers greater than 2^31 - 1 should be rounded to 2^31 - 1.

Return the integer as the final result.
*/

function myAtoi(s: string): number {
    const INT_MAX = 2**31 - 1;
    const INT_MIN = -2**31;
    
    let i = 0;
    let sign = 1;
    let result = 0;
    
    while (s[i] === ' ') {
        i++;
    }
    
    if (s[i] === '-' || s[i] === '+') {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }
    
    while (i < s.length && !isNaN(parseInt(s[i]))) {
        result = result * 10 + parseInt(s[i]);
        i++;
    }
    
    result *= sign;
    
    if (result > INT_MAX) {
        return INT_MAX;
    } else if (result < INT_MIN) {
        return INT_MIN;
    } else {
        return result;
    }
}