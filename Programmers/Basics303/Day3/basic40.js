// https://school.programmers.co.kr/learn/courses/30/lessons/120851
// 숨어있는 숫자의 덧셈 (1)
const solution = (my_string) =>
  [...my_string]
    .filter((a) => Number(a) > 0)
    .reduce((a, b) => (a += Number(b)), 0);
