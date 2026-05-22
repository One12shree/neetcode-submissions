/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    removeNthFromEnd(head, n) {
        let dummy = new ListNode(0, head);
        let fast = dummy;
        let slow = dummy;

        // Move fast n+1 steps ahead
        for (let i = 0; i <= n; i++) {
            fast = fast.next;
        }

        // Move fast to the end, maintaining the gap
        while (fast !== null) {
            fast = fast.next;
            slow = slow.next;
        }

        // Remove the nth node
        slow.next = slow.next.next;

        return dummy.next;
    }
}

