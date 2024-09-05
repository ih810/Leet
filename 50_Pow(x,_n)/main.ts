/*
Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).
*/

function myPow(x: number, n: number): number {
    if (n === 0) {
        return 1;
    }
    
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    
    let result = 1;
    while (n > 0) {
        if (n % 2 === 1) {
            result *= x;
        }
        x *= x;
        n = Math.floor(n / 2);
    }
    
    return result;
}