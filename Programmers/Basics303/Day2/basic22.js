// https://school.programmers.co.kr/learn/courses/30/lessons/120903
// 배열의 유사도
const solution = (s1, s2) => s1.filter((a) => s2.includes(a)).length;
