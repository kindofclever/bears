# Kata-week - learning about algos
## Knowledge that helps understanding LeetCode challenges
### Recursion 
A function is called recursive when it calls itself. Here are two example of non recursive functions turned into a recursive ones.

1. example

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

2. example

```
const sumUp = (number) => {
  let sum = 0;
  for (i = 1; i <= number; i++) {
    sum += i;
  }
  return sum;
};

const sumUpRecursive = (number, total = 0) => {
    if (number <= 0) {
        return total;
    }
    return sumUpRecursive(number - 1, total + number);
};

```

To prevent the function from running endlessly it needs a breakout clause at the beginning of its body. If this clause isn´t met, it will run again and again, because the function calls itself.

When the statement in the breakout clause is met, the return keyword will end the execution. If there is no breakout clause the function will cause a stack overflow at one point.

In the second example we pass in a parameter with a default value to give the function a place to store its calculations. This is a way of memoization.
### Iteration

A function is call iterative when there is a loop (or repetition).

### Big-o notation 

Big-o is simplified the analysis to an algorithms efficiency. It's a way of being able to compare the time and space a function needs to run. [Here you can find a good video](https://www.youtube.com/watch?v=itn09C2ZB9Y).

### ListNodes 

![Descriptive Image of Linked List](https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2013/03/Linkedlist.png)



You find solutions to following problems:

1. **Merge Two Sorted Lists** -> The problem: [see here](https://leetcode.com/problems/merge-two-sorted-lists/) -> The solution -> mergeTwoSortedLists.js


2. **Climbing Stairs** -> The problem: [see here](https://leetcode.com/problems/climbing-stairs/) -> The solution -> mergeTwoSortedLists.js


3. **Reverse Linked List** -> The problem: [see here](https://leetcode.com/problems/reverse-linked-list/) -> The solution -> reverseLinkedList.js


4. **Longest common prefix** -> The problem: [see here](https://leetcode.com/problems/longest-common-prefix/) -> The solution -> longestCommonPrefix.js

