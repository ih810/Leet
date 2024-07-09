function lengthOfLongestSubstring(s: string): number {
    let maxLength = 0;
    let start = 0;
    const charIndexMap: { [key: string]: number } = {};

    for (let end = 0; end < s.length; end++) {
        const char = s[end];
        if (charIndexMap[char] !== undefined) {
            start = Math.max(start, charIndexMap[char] + 1);
        }
        charIndexMap[char] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}