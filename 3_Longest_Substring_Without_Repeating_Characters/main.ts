/*
Given a string s, find the length of the longest substring without repeating characters.

Example:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/

function lengthOfLongestSubstring(s: string): number {
    let maxLength = 0;
    let start = 0;
    const charIndexMap: { [key: string]: number } = {};

    for (let end = 0; end < s.length; end++) {
        if (s[end] in charIndexMap) {
            start = Math.max(start, charIndexMap[s[end]] + 1);
        }
        charIndexMap[s[end]] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}