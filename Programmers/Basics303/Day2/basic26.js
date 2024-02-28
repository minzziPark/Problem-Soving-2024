// https://school.programmers.co.kr/learn/courses/30/lessons/120841
// 점의 위치 구하기
const solution = (dot) =>
  dot[0] > 0 ? (dot[1] > 0 ? 1 : 4) : dot[1] > 0 ? 2 : 3;
