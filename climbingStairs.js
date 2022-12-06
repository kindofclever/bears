/*
That´s the problem:

________

We have to climb staircase. we can take up-to n steps to reach top.

Each time we can either take 1 step or 2 step. We need to find out in how many ways we can climb to the top.

________

Here you can find the in detail problem: https://leetcode.com/problems/climbing-stairs/

This is a very good resource to the problem https://www.youtube.com/watch?v=Y0lT9Fck7qI

Below you find the solution to the LeetCode problem.
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
