// https://school.programmers.co.kr/learn/courses/30/lessons/12932
const solution = (n) =>
  String(n)
    .split("")
    .reverse()
    .map((a) => parseInt(a));
