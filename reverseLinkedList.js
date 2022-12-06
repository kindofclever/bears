/*
That´s the problem:

________
Turn:

1->2->3->4->5->NULL

into:

Null<-1<-2<-3<-4<-5
________

Here you can find the in detail problem: https://leetcode.com/problems/reverse-linked-list/

This is a very good resource to the problem https://www.youtube.com/watch?v=Hj_rA0dhr2I

Below you find the solution to the LeetCode problem.
*/

const reverseList = (head) => {
  if (head == null || head.next == null) {
    return head;
  }
  newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
};
