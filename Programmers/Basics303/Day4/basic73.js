// https://school.programmers.co.kr/learn/courses/30/lessons/181908
// 접미사인지 확인하기
const solution = (my_string, is_suffix) =>
  my_string.includes(is_suffix) &&
  my_string[my_string.length - 1] === is_suffix[is_suffix.length - 1]
    ? 1
    : 0;
