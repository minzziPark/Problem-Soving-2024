// https://school.programmers.co.kr/learn/courses/30/lessons/181888
// n개 간격의 원소들
const solution = (num_list, n) =>
  num_list.filter((_, index) => index % n === 0);
