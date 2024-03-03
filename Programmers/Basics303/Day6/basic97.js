// https://school.programmers.co.kr/learn/courses/30/lessons/181864
// 문자열 바꿔서 찾기
const solution = (myString, pat) =>
  myString
    .split("")
    .map((a) => (a === "A" ? (a = "B") : (a = "A")))
    .join("")
    .includes(pat)
    ? 1
    : 0;
