// https://school.programmers.co.kr/learn/courses/30/lessons/181854
// 배열의 길이에 따라 다른 연산하기
const solution = (arr, n) =>
  arr.length % 2 === 1
    ? arr.map((a, index) => (index % 2 === 0 ? a + n : a))
    : arr.map((a, index) => (index % 2 === 1 ? a + n : a));
