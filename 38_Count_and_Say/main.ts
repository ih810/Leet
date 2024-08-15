/*
The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

countAndSay(1) = "1"
countAndSay(n) is the run-length encoding of countAndSay(n - 1).

Run-length encoding (RLE) is a string compression method that works by replacing consecutive identical characters (repeated 2 or more times) with the concatenation of the character and the number marking the count of the characters (length of the run).

Given a positive integer n, return the nth element of the count-and-say sequence.
*/

function countAndSay(n: number): string {
    let result = '1';
    
    for (let i = 1; i < n; i++) {
        let temp = '';
        let count = 1;
        
        for (let j = 0; j < result.length; j++) {
            if (result[j] === result[j + 1]) {
                count++;
            } else {
                temp += count + result[j];
                count = 1;
            }
        }
        
        result = temp;
    }
    
    return result;
}