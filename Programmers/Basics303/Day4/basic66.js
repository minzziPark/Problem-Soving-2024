// https://school.programmers.co.kr/learn/courses/30/lessons/181939
// 더 크게 합치기
const solution = (a, b) => {
  var ab = Number(String(a) + String(b));
  var ba = Number(String(b) + String(a));
  return ab > ba ? ab : ba;
};
