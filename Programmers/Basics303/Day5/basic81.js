// https://school.programmers.co.kr/learn/courses/30/lessons/181896
// 첫 번째로 나오는 음수
const solution = (num_list) =>
  num_list.reduce(
    (a, b, index) => (b < 0 && a == -1 ? (a += index + 1) : a),
    -1
  );
