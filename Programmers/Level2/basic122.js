// https://school.programmers.co.kr/learn/courses/30/lessons/120956
// 옹알이 (1)
const solution = (babbling) => {
  const word = ["aya", "ye", "woo", "ma"];
  let answer = 0;
  let arr;
  let a;

  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < babbling.length; j++) {
      if (babbling[j].length > 0 && babbling[j].includes(word[i])) {
        babbling[j] = babbling[j]
          .split(word[i])
          .filter((a) => a != "")
          .join("-");
      }
    }
  }
  for (let i = 0; i < babbling.length; i++) {
    console.log(babbling[i]);
  }
  answer = babbling.filter((a) => a === "-" || a.length === 0).length;
  return answer;
};
