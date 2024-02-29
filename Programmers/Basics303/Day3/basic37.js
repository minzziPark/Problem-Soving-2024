// https://school.programmers.co.kr/learn/courses/30/lessons/120825
// 문자 반복 출력하기
const solution = (my_string, n) =>
  my_string
    .split("")
    .reduce((a, b) => [...a, b.repeat(n)], [])
    .join("");
