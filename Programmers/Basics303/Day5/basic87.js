// https://school.programmers.co.kr/learn/courses/30/lessons/120893
// 대문자와 소문자
const solution = (my_string) =>
  my_string
    .split("")
    .map((a) => (/^[a-z]$/.test(a) ? a.toUpperCase() : a.toLowerCase()))
    .join("");
