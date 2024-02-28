// https://school.programmers.co.kr/learn/courses/30/lessons/120809
// 배열 두배 만들기
const solution = (numbers) => numbers.reduce((a, b) => [...a, b * 2], []);
