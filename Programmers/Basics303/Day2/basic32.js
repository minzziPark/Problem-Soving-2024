// https://school.programmers.co.kr/learn/courses/30/lessons/120836
// 순서쌍의 개수
const solution = (n) => {
  var answer = 0;
  let i;
  for (i = 1; i <= ~~Math.sqrt(n); i++) {
    if (n % i == 0) answer++;
  }
  answer *= 2;
  if (Math.sqrt(n) === i - 1) answer -= 1;
  return answer;
};
