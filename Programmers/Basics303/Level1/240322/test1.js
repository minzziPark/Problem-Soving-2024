// https://school.programmers.co.kr/learn/courses/30/lessons/12931

const solution = (N) =>
  String(N)
    .split("")
    .reduce((a, b) => (a += parseInt(b)), 0);
