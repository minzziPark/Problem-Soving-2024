// https://school.programmers.co.kr/learn/courses/30/lessons/181887
// 홀수 vs 짝수
const solution = (num_list) => {
  let even = num_list
    .filter((_, index) => (index + 1) % 2 === 0)
    .reduce((a, b) => (a += b));
  let odd = num_list.reduce((a, b) => (a += b)) - even;

  return Math.max(even, odd);
};

//원래 하고 싶었던 방식
function solution(num_list) {
  return Math.max(
    ...num_list.reduce(
      ([o, e], c, i) => (i % 2 ? [o + c, e] : [o, e + c]),
      [0, 0]
    )
  );
}
