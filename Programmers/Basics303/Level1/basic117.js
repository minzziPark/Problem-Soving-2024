// https://school.programmers.co.kr/learn/courses/30/lessons/12928
// 약수의 합
const solution = (n) => {
  let answer = 0;
  for (let i = 1; i <= ~~Math.sqrt(n); i++) {
    if (n % i === 0) {
      if (n / i === i) {
        answer += n / i;
        return answer;
      }
      answer += n / i;
      answer += i;
    }
  }
  return answer;
};
