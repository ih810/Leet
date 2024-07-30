/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function swapPairs(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head;
    }
    
    const newHead = head.next;
    let prev: ListNode | null = null;
    let current: ListNode | null = head;
    
    while (current && current.next) {
        const next = current.next;
        const temp = next.next;
        
        if (prev) {
            prev.next = next;
        }
        
        current.next = temp;
        next.next = current;
        
        prev = current;
        current = temp;
    }
    
    return newHead;
}