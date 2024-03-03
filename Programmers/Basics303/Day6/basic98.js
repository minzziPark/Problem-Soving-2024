// https://school.programmers.co.kr/learn/courses/30/lessons/181849
// 문자열 정수의 합
const solution = (num_str) =>
  num_str.split("").reduce((a, b) => (a += Number(b)), 0);
