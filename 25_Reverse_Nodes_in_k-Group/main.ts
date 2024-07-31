/*
Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

Example 1:
Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]

Example 2:
Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]

Constraints:
- The number of nodes in the list is n.
- 1 <= k <= n <= 5000
- 0 <= Node.val <= 1000

Follow-up: Can you solve the problem in O(1) extra memory space?
*/

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    let curr = head;
    let count = 0;
    while (curr !== null && count < k) {
        curr = curr.next;
        count++;
    }
    if (count === k) {
        let reversedHead = reverseLinkedList(head, k);
        head.next = reverseKGroup(curr, k);
        return reversedHead;
    }
    return head;
}

function reverseLinkedList(head: ListNode | null, k: number): ListNode | null {
    let prev = null;
    let curr = head;
    while (k > 0) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
        k--;
    }
    return prev;
}