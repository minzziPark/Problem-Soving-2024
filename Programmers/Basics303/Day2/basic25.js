// https://school.programmers.co.kr/learn/courses/30/lessons/120906
// 자릿수 더하기
const solution = (n) => {
  var answer = 0;
  while (n > 0) {
    answer += Math.floor(n) % 10;
    n /= 10;
  }
  return answer;
};
