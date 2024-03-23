// https://school.programmers.co.kr/learn/courses/30/lessons/140108
const solution = (s) => {
  let result = 0;
  let first = 0;
  let word = "";
  let other = 0;
  for (let i = 0; i < s.length; i++) {
    if (!first) {
      word = s[i];
      first += 1;
    } else if (s[i] === word) {
      first += 1;
    } else {
      other += 1;
    }

    if (first === other) {
      result += 1;
      first = 0;
      word = "";
      other = 0;
    } else if (i + 1 === s.length) {
      result += 1;
    }
  }
  return result;
};
