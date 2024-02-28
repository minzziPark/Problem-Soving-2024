// https://school.programmers.co.kr/learn/courses/30/lessons/120829
// 각도기
const solution = (angle) =>
  angle === 180 ? 4 : angle > 90 ? 3 : angle === 90 ? 2 : 1;
