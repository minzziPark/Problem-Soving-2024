// https://school.programmers.co.kr/learn/courses/30/lessons/181936
// 공배수
const solution = (number, n, m) =>
  number % n === 0 && number % m === 0 ? 1 : 0;
