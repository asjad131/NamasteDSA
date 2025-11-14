/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head) return false;
    
    let existNodes = new Set();
    let curr = head;

    while(curr != null){
        
        if (existNodes.has(curr)){
            return true;
        }
        existNodes.add(curr);
        curr=curr.next;
    }
    return false;
};