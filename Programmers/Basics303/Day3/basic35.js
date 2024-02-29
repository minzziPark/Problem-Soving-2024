// https://school.programmers.co.kr/learn/courses/30/lessons/120889
// 삼각형의 완성조건 (1)
const solution = (sides) => {
  sides.sort((a, b) => b - a);
  return sides[0] * 2 < sides.reduce((a, b) => (a += b)) ? 1 : 2;
};
