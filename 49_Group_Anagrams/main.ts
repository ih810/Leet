/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]

Constraints:
- 1 <= strs.length <= 10^4
- 0 <= strs[i].length <= 100
- strs[i] consists of lowercase English letters.
*/

function groupAnagrams(strs: string[]): string[][] {
    const map: Map<string, string[]> = new Map();
    
    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (map.has(sortedStr)) {
            map.get(sortedStr)!.push(str);
        } else {
            map.set(sortedStr, [str]);
        }
    }
    
    return Array.from(map.values());
}