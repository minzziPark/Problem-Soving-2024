// https://school.programmers.co.kr/learn/courses/30/lessons/181929
// 원소들의 곱과 합
const solution = (num_list) => {
  var a = num_list.reduce((a, b) => (a *= b), 1);
  var b = Math.pow(
    num_list.reduce((a, b) => (a += b), 0),
    2
  );
  return a < b ? 1 : 0;
};
