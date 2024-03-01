// https://school.programmers.co.kr/learn/courses/30/lessons/181910
// 문자열의 뒤의 n글자
const solution = (my_string, n) =>
  [...my_string].filter((a, index) => index >= my_string.length - n).join("");
