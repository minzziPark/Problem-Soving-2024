// https://school.programmers.co.kr/learn/courses/30/lessons/120826
// 특정 문자 제거하기
const solution = (my_string, letter) =>
  my_string.split("").reduce((a, b) => {
    if (b !== letter) a += b;
    return a;
  }, "");
