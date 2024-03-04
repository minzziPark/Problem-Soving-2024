// https://school.programmers.co.kr/learn/courses/30/lessons/120862
// 최댓값 만들기 (2)
const solution = (numbers) =>
  Math.max(
    numbers.sort((a, b) => b - a)[0] * numbers[1],
    numbers.sort((a, b) => b - a)[numbers.length - 1] *
      numbers[numbers.length - 2]
  );
