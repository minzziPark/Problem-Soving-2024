// https://school.programmers.co.kr/learn/courses/30/lessons/120833
// 배열 자르기
const solution = (numbers, num1, num2) => {
  var answer = [];
  for (let i = num1; i <= num2; i++) {
    answer.push(numbers[i]);
  }
  return answer;
};
