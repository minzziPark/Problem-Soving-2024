// https://school.programmers.co.kr/learn/courses/30/lessons/12933

const solution = (n) =>
  parseInt(
    String(n)
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
