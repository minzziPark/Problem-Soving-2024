// https://school.programmers.co.kr/learn/courses/30/lessons/181901
// 배열 만들기 1
const solution = (n, k) => {
  var answer = [];
  for (let i = 1; k * i <= n; i++) {
    answer.push(k * i);
  }
  return answer;
};
