// https://school.programmers.co.kr/learn/courses/30/lessons/120824
// 짝수 홀수 개수
const solution = (num_list) => {
  var even = num_list.filter((a) => a % 2 === 0).length;
  return [even, num_list.length - even];
};
