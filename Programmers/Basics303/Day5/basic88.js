// https://school.programmers.co.kr/learn/courses/30/lessons/120837
// 개미 군단
const solution = (hp) =>
  [5, 3, 1].reduce((a, b) => {
    a += ~~(hp / b);
    hp %= b;
    return a;
  }, 0);
