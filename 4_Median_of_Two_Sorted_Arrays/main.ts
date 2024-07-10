function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const merged = [...nums1, ...nums2].sort((a, b) => a - b);
    const len = merged.length;
    if (len % 2 === 0) {
        return (merged[len / 2 - 1] + merged[len / 2]) / 2;
    } else {
        return merged[Math.floor(len / 2)];
    }
}