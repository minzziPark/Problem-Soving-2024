// https://school.programmers.co.kr/learn/courses/30/lessons/76501
// 음양 더하기
const solution = (absolutes, signs) =>
  absolutes.reduce((a, b, index) => (a += (signs[index] ? 1 : -1) * b), 0);
