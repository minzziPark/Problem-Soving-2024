// https://school.programmers.co.kr/learn/courses/30/lessons/181906
// 접두사인지 확인하기
const solution = (my_string, is_prefix) =>
  is_prefix
    .split("")
    .reduce((a, b, i) => (a *= is_prefix[i] == my_string[i] ? 1 : 0), 1);
