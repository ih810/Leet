/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:

P   A   H   N
A P L S I I G
Y   I   R

And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
*/

function convert(s: string, numRows: number): string {
    if (numRows === 1) return s;

    const rows: string[] = new Array(numRows).fill('');
    let index = 0;
    let direction = -1;

    for (let char of s) {
        rows[index] += char;
        if (index === 0 || index === numRows - 1) {
            direction *= -1;
        }
        index += direction;
    }

    return rows.join('');
}