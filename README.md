# Kata-week - learning about algos

## Knowledge that helps understanding LeetCode challenges

### Recursion 
A function is called recursive when it calls itself. Here is an example of of a non recursive function turned into a recursive one.

```
const countDown = (number) => {
  for (i = number; i >= 0; i--) {
    console.log(i);
  }
  console.log('Happy new year!');
};

const countDownRecursive = (number) => {
    if (number <= 0) {
        console.log('Happy new year!');
        return;
    }
    console.log(number); 
    countDownRecursive(number - 1);
};

```

To prevent the function from running endlessly it needs a break out clause at the beginning of its body. 




You find solutions to following problems:

1. **Merge Two Sorted Lists** -> The problem: [see here](https://leetcode.com/problems/merge-two-sorted-lists/) -> The solution -> mergeTwoSortedLists.js


2. **Climbing Stairs** -> The problem: [see here](https://leetcode.com/problems/climbing-stairs/) -> The solution -> mergeTwoSortedLists.js


3. **Reverse Linked List** -> The problem: [see here](https://leetcode.com/problems/reverse-linked-list/) -> The solution -> reverseLinkedList.js
