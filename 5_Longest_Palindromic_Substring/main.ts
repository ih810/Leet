/*
Given a string s, return the longest palindromic substring in s.
*/

function longestPalindrome(s: string): string {
    let longest = '';
    
    for (let i = 0; i < s.length; i++) {
        const expand1 = expandAroundCenter(s, i, i);
        const expand2 = expandAroundCenter(s, i, i + 1);
        
        const currentLongest = expand1.length > expand2.length ? expand1 : expand2;
        
        if (currentLongest.length > longest.length) {
            longest = currentLongest;
        }
    }
    
    return longest;
}

function expandAroundCenter(s: string, left: number, right: number): string {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    
    return s.slice(left + 1, right);
}