// https://school.programmers.co.kr/learn/courses/30/lessons/181863
// rny_string
const solution = (rny_string) =>
  [...rny_string].map((a) => (a === "m" ? (a = "rn") : a)).join("");
