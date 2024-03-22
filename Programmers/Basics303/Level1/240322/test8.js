// https://school.programmers.co.kr/learn/courses/30/lessons/12930
const solution = (s) => {
  let word = s.split(" ");
  for (let i = 0; i < word.length; i++) {
    word[i] = word[i]
      .split("")
      .map((a, idx) => (idx % 2 ? a.toLowerCase() : a.toUpperCase()))
      .join("");
  }
  return word.join(" ");
};
