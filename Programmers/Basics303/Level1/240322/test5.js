// https://school.programmers.co.kr/learn/courses/30/lessons/12934
const solution = (n) =>
  Math.pow(~~Math.sqrt(n), 2) === n ? Math.pow(~~Math.sqrt(n) + 1, 2) : -1;
