// https://school.programmers.co.kr/learn/courses/30/lessons/181852
// 뒤에서 5등 위로
const solution = (num_list) =>
  num_list.sort((a, b) => a - b).filter((a, index) => index >= 5);
