// https://school.programmers.co.kr/learn/courses/30/lessons/181926
// 수 조작하기 1
const solution = (n, control) => {
  for (let i = 0; i < control.length; i++) {
    if (control[i] === "w") {
      n += 1;
    } else if (control[i] === "s") {
      n -= 1;
    } else if (control[i] === "d") {
      n += 10;
    } else {
      n -= 10;
    }
  }
  return n;
};

// 객체
// const operations = {
//   w: (n) => n + 1,
//   s: (n) => n - 1,
//   d: (n) => n + 10,
//   a: (n) => n - 10,
// };

// function solution(n, control) {
//   return [...control].reduce((prev, op) => operations[op](prev), n);
// }
