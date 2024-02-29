// https://school.programmers.co.kr/learn/courses/30/lessons/120813
// 짝수는 싫어요
const solution = (n) => {
  var answer = [];
  for (var i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      answer.push(i);
    }
  }
  return answer;
};
