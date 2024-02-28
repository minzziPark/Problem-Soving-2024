// https://school.programmers.co.kr/learn/courses/30/lessons/120831
// 짝수의 합
const solution = (n) => {
  var result = 0;
  if (n % 2 !== 0) {
    n -= 1;
  }
  while (n > 0) {
    result += n;
    n -= 2;
  }
  return result;
};
