// https://school.programmers.co.kr/learn/courses/30/lessons/12939
// 최댓값과 최솟값
const solution = (s) =>
  Math.min(...s.split(" ")) + " " + Math.max(...s.split(" "));
