function longestPalindrome(s: string): string {
    let start = 0;
    let maxLength = 0;
    
    function expandAroundCenter(left: number, right: number): number {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    }
    
    for (let i = 0; i < s.length; i++) {
        const len1 = expandAroundCenter(i, i);
        const len2 = expandAroundCenter(i, i + 1);
        const len = Math.max(len1, len2);
        if (len > maxLength) {
            start = i - Math.floor((len - 1) / 2);
            maxLength = len;
        }
    }
    
    return s.substring(start, start + maxLength);
}