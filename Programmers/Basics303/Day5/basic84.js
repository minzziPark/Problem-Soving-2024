// https://school.programmers.co.kr/learn/courses/30/lessons/120892
// 암호 해독
const solution = (cipher, code) =>
  cipher
    .split("")
    .filter((a, index) => (index + 1) % code === 0)
    .join("");
