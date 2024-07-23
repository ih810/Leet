/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

Example 1:
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:
Input: digits = ""
Output: []

Example 3:
Input: digits = "2"
Output: ["a","b","c"]
*/

function letterCombinations(digits: string): string[] {
    const phoneMap: { [key: string]: string[] } = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
    };

    const result: string[] = [];

    const backtrack = (index: number, current: string) => {
        if (index === digits.length) {
            result.push(current);
            return;
        }

        const letters = phoneMap[digits[index]];
        for (let letter of letters) {
            backtrack(index + 1, current + letter);
        }
    };

    if (digits.length > 0) {
        backtrack(0, '');
    }

    return result;
}