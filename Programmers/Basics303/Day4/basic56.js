// https://school.programmers.co.kr/learn/courses/30/lessons/181884
// n보다 커질 때까지 더하기
const solution = (numbers, n) =>
  numbers.reduce((a, b) => (a > n ? a : (a += b)), 0);
