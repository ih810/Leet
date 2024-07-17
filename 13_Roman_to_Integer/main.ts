/**
 * Given a roman numeral, convert it to an integer.
 * 
 * Example 1:
 * Input: s = "III"
 * Output: 3
 * Explanation: III = 3.
 * 
 * Example 2:
 * Input: s = "LVIII"
 * Output: 58
 * Explanation: L = 50, V= 5, III = 3.
 * 
 * Example 3:
 * Input: s = "MCMXCIV"
 * Output: 1994
 * Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 * 
 * Constraints:
 * 1 <= s.length <= 15
 * s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
 * It is guaranteed that s is a valid roman numeral in the range [1, 3999].
 */

function romanToInt(s: string): number {
    const romanValues: { [key: string]: number } = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (i < s.length - 1 && romanValues[s[i]] < romanValues[s[i + 1]]) {
            result -= romanValues[s[i]];
        } else {
            result += romanValues[s[i]];
        }
    }

    return result;
}