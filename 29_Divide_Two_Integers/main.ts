/*
Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

Return the quotient after dividing dividend by divisor.

Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [-2^31, 2^31 - 1]. For this problem, if the quotient is strictly greater than 2^31 - 1, then return 2^31 - 1, and if the quotient is strictly less than -2^31, then return -2^31.
*/

function divide(dividend: number, divisor: number): number {
    if (dividend === 0) return 0;
    
    const isNegative = (dividend < 0) !== (divisor < 0);
    const MAX_INT = 2**31 - 1;
    const MIN_INT = -2**31;
    
    let dvd = Math.abs(dividend);
    let dvs = Math.abs(divisor);
    let quotient = 0;
    
    while (dvd >= dvs) {
        let temp = dvs;
        let multiple = 1;
        
        while (dvd >= (temp << 1)) {
            temp <<= 1;
            multiple <<= 1;
        }
        
        dvd -= temp;
        quotient += multiple;
    }
    
    if (isNegative) {
        quotient = -quotient;
    }
    
    if (quotient > MAX_INT) return MAX_INT;
    if (quotient < MIN_INT) return MIN_INT;
    
    return quotient;
}