/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity.

Example:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
*/

function searchRange(nums: number[], target: number): number[] {
    const findBound = (isLeft: boolean): number => {
        let left = 0;
        let right = nums.length;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] > target || (isLeft && nums[mid] === target)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    };

    const leftIndex = findBound(true);
    if (leftIndex === nums.length || nums[leftIndex] !== target) {
        return [-1, -1];
    }

    const rightIndex = findBound(false) - 1;
    return [leftIndex, rightIndex];
}