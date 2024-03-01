// https://school.programmers.co.kr/learn/courses/30/lessons/181920
// 카운트 업
const solution = (start_num, end_num) =>
  Array.from(
    { length: end_num - start_num + 1 },
    (a, i) => (a = start_num + i)
  );
