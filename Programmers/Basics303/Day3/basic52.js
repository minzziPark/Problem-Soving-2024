// https://school.programmers.co.kr/learn/courses/30/lessons/181938
// 두 수의 연산값 비교하기
const solution = (a, b) =>
  a * Math.pow(10, String(b).length) + b >= 2 * a * b
    ? a * Math.pow(10, String(b).length) + b
    : 2 * a * b;
