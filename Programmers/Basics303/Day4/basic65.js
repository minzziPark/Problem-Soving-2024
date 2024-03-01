// https://school.programmers.co.kr/learn/courses/30/lessons/181935
// 홀짝에 따라 다른 값 반환하기
const solution = (n) => {
  var answer = 0;
  if (n % 2 === 0) {
    for (let i = 2; i <= n; i += 2) {
      answer += Math.pow(i, 2);
    }
  } else {
    for (let i = 1; i <= n; i += 2) {
      answer += i;
    }
  }
  return answer;
};
