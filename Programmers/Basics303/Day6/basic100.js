// https://school.programmers.co.kr/learn/courses/30/lessons/181839
// 주사위 게임 1
const solution = (a, b) =>
  a % 2 === 1 && b % 2 === 1
    ? Math.pow(a, 2) + Math.pow(b, 2)
    : a % 2 === 0 && b % 2 === 0
    ? Math.abs(a - b)
    : 2 * (a + b);
