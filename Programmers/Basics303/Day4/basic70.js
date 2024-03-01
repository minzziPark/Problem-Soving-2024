// https://school.programmers.co.kr/learn/courses/30/lessons/181882
// 조건에 맞게 수열 변환하기 1
const solution = (arr) =>
  arr.map((a) =>
    a >= 50 && a % 2 === 0 ? a / 2 : a < 50 && a % 2 === 1 ? a * 2 : a
  );
