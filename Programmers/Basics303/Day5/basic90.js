// https://school.programmers.co.kr/learn/courses/30/lessons/181899
// 카운트 다운
const solution = (start, end_num) =>
  Array.from(
    { length: start - end_num + 1 },
    (a, index) => (a = start - index)
  );
