/*
That´s the problem:

________

We have to climb staircase. we can take up-to n steps to reach top.

Each time we can either take 1 step or 2 step. We need to find out in how many ways we can climb to the top.

________

Here you can find the in detail problem: https://leetcode.com/problems/climbing-stairs/

This is a very good resource to the problem https://www.youtube.com/watch?v=Y0lT9Fck7qI

Below you find the solution to the LeetCode problem and below that you find a solution with comments.
*/

const cache = {
  0: 1,
  1: 1,
};

const climbStairs = (n) => {
  if (n <= 1) n;
  for (let i = 2; i <= n; i++) {
    cache[i] = cache[i - 1] + cache[i - 2];
  }
  return cache[n];
};

// ______________________________________________________________________________________

// Climbing stairs solution with comments:

// By drawing diffrent solutions out, I realized that with each step more,
// the number of ways to climb the stairs increases by the sum of the two previous steps.

// This pattern also occurs in the Fibonacci sequence.
// The Fibonacci sequence is a series of numbers
// in which each number is the sum of the two preceding numbers.

const climbStairsWithComments = (n) => {
  // In this solution, I add two numbers in a loop (a + b)
  // and reassign each item with the next value (a with b, b with c - the result of a + b).
  // Once the loop reaches the desired index, we return the calculated sum (Line 58).
  // The loop starts at two and not at zero,
  // because we already have the first two numbers in the sequence (0 and 1).

  // If n is less than or equal to zero, return 0,
  //because if the stairs have a negative number of steps or 0 steps, we can´t climb them.

  // I know that there are plenty of other solutions out there, so maybe you should have a look
  // at the one provided on top. This one is caching the values it calculated
  // before and is therefore faster

  if (n <= 0) return 0;

  // I start with one and one because even if there are no steps to climb,
  // we can still climb the stairs in one way (by not climbing them at all).

  let a = 1;
  let b = 1;
  let c = n;

  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }

  return c;
};
