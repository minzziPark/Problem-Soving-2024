// https://school.programmers.co.kr/learn/courses/30/lessons/120849
// 모음 제거
const solution = (my_string) => {
  var answer = "";
  for (let i = 0; i < my_string.length; i++) {
    if (!["a", "e", "i", "o", "u"].includes(my_string[i]))
      answer += my_string[i];
  }
  return answer;
};
