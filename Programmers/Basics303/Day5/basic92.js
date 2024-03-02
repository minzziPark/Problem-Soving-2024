// https://school.programmers.co.kr/learn/courses/30/lessons/181891
// 순서 바꾸기
const solution = (num_list, n) =>
  num_list.slice(n).concat(num_list.slice(0, n));
