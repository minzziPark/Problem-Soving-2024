// https://school.programmers.co.kr/learn/courses/30/lessons/12954
const solution = (x, n) => {
  let result = [x];
  for (let i = 0; i < n - 1; i++) {
    result.push(result[i] + x);
  }
  return result;
};
