// https://school.programmers.co.kr/learn/courses/30/lessons/181879
// 길이에 따른 연산
const solution = (num_list) =>
  num_list.reduce((a, b) => (num_list.length >= 11 ? a + b : a * b));
