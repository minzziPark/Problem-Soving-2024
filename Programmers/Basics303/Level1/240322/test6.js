// https://school.programmers.co.kr/learn/courses/30/lessons/12935
const solution = (arr) =>
  arr.length === 1 ? [-1] : arr.filter((a) => a !== Math.min(...arr));
