/*
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.
*/

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const mergeTwoLists = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
        if (!l1) return l2;
        if (!l2) return l1;
        
        if (l1.val < l2.val) {
            l1.next = mergeTwoLists(l1.next, l2);
            return l1;
        } else {
            l2.next = mergeTwoLists(l1, l2.next);
            return l2;
        }
    };
    
    const merge = (lists: Array<ListNode | null>, start: number, end: number): ListNode | null => {
        if (start === end) return lists[start];
        if (start > end) return null;
        
        const mid = Math.floor((start + end) / 2);
        const left = merge(lists, start, mid);
        const right = merge(lists, mid + 1, end);
        
        return mergeTwoLists(left, right);
    };
    
    return merge(lists, 0, lists.length - 1);
}