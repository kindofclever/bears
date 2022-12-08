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
Below you find the solution to the LeetCode problem and below that solution u find a commented one.
*/

const mergeTwoLists = (list1, list2) => {
  let listOfLinkedNodes = new ListNode(0);
  let headOfListOfLinkedNodes = listOfLinkedNodes;

  while (list1 != null && list2 != null) {
    if (list1.val < list2.val) {
      listOfLinkedNodes.next = list1;
      list1 = list1.next;
    } else {
      listOfLinkedNodes.next = list2;
      list2 = list2.next;
    }
    listOfLinkedNodes = listOfLinkedNodes.next;
  }

  if (list1 == null) {
    listOfLinkedNodes.next = list2;
  } else {
    listOfLinkedNodes.next = list1;
  }

  return headOfListOfLinkedNodes.next;
};
// ______________________________________________________________________________________

// Longest common prefix solution with comments:

const mergeTwoListsWithComments = (list1, list2) => {
  // Initialise a new LinkedList with a dummy ListNode
  let listOfLinkedNodes = new ListNode(0);

  // Assign a reference to the head of the new LinkedList to use later
  let headOfListOfLinkedNodes = listOfLinkedNodes;

  // Whilst both of the passed in lists contain more elements than null -> guard clause
  while (list1 != null && list2 != null) {
    // If list1's value is smaller -> check which list's comes first by
    if (list1.val < list2.val) {
      // Add list1's value to the listOfLinkedNodes
      listOfLinkedNodes.next = list1;

      // Move list1 to its next element
      list1 = list1.next;
    } else {
      // Add list2's value to the listOfLinkedNodes
      listOfLinkedNodes.next = list2;

      // Move list2 to its next element
      list2 = list2.next;
    }

    // Move into the next level of the LinkedList for the next iteration
    listOfLinkedNodes = listOfLinkedNodes.next;
  }

  // If list1 has run out of elements
  if (list1 == null) {
    // Append list2 to the listOfLinkedNodes
    listOfLinkedNodes.next = list2;
  }
  // If list2 has run out of elements
  else {
    // Append list1 to the listOfLinkedNodes
    listOfLinkedNodes.next = list1;
  }

  return headOfListOfLinkedNodes.next;
};
