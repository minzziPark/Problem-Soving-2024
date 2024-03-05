// https://school.programmers.co.kr/learn/courses/30/lessons/12909
// 올바른 괄호

const solution = (s) => {
  let left = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      left += 1;
    } else {
      left -= 1;
    }
    if (left < 0) return false;
  }
  return left === 0;
};
