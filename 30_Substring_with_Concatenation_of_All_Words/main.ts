/*
You are given a string s and an array of strings words. All the strings of words are of the same length.

A concatenated string is a string that exactly contains all the strings of any permutation of words concatenated.

Return an array of the starting indices of all the concatenated substrings in s.
*/

function findSubstring(s: string, words: string[]): number[] {
    const result: number[] = [];
    if (s.length === 0 || words.length === 0) return result;

    const wordLength = words[0].length;
    const totalWordsLength = wordLength * words.length;
    const wordMap = new Map<string, number>();

    for (const word of words) {
        wordMap.set(word, (wordMap.get(word) || 0) + 1);
    }

    for (let i = 0; i <= s.length - totalWordsLength; i++) {
        const seenWords = new Map<string, number>();
        let j = 0;

        while (j < words.length) {
            const currentWord = s.substr(i + j * wordLength, wordLength);
            if (!wordMap.has(currentWord)) break;

            seenWords.set(currentWord, (seenWords.get(currentWord) || 0) + 1);
            if (seenWords.get(currentWord) > (wordMap.get(currentWord) || 0)) break;

            j++;
        }

        if (j === words.length) {
            result.push(i);
        }
    }

    return result;
}