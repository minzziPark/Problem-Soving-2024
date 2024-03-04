// https://school.programmers.co.kr/learn/courses/30/lessons/42748
// K번째수
const solution = (array, commands) =>
  commands.map(
    (a) => array.slice(a[0] - 1, a[1]).sort((a, b) => a - b)[a[2] - 1]
  );
