// https://school.programmers.co.kr/learn/courses/30/lessons/181911
// 부분 문자열 이어 붙여 문자열 만들기
const solution = (my_strings, parts) =>
  my_strings.reduce(
    (a, b, index) => (a += b.slice(parts[index][0], parts[index][1] + 1)),
    ""
  );
