/*
That´s the problem:

________

Input: head1: 5->7->9
        head2: 4->6->8 
Output: 4->5->6->7->8->9
Explanation: The output list is in sorted order.

Input: head1: 1->3->5->7
        head2: 2->4
Output: 1->2->3->4->5->7

Explanation: The output list is in sorted order.

________

Here you can find the in detail problem: https://leetcode.com/problems/merge-two-sorted-lists/
Below you find the solution to the LeetCode problem.
*/

const mergeTwoLists = (list1, list2) => {
  let mergedList = new ListNode(0);
  let lastNumberOfMergedList = mergedList;

  while (list1 != null && list2 != null) {
    if (list1.val < list2.val) {
      mergedList.next = list1;
      list1 = list1.next;
    } else {
      mergedList.next = list2;
      list2 = list2.next;
    }
    mergedList = mergedList.next;
  }

  if (list1 == null) {
    mergedList.next = list2;
  } else {
    mergedList.next = list1;
  }

  return lastNumberOfMergedList.next;
};
