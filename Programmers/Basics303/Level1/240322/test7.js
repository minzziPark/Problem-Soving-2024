// https://school.programmers.co.kr/learn/courses/30/lessons/12948
const solution = (phone_number) =>
  phone_number
    .split("")
    .reverse()
    .map((a, idx) => (idx > 3 ? (a = "*") : a))
    .reverse()
    .join("");
