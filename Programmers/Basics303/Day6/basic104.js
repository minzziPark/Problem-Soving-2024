// https://school.programmers.co.kr/learn/courses/30/lessons/120899
// 가장 큰 수 찾기
const solution = (array) => {
  var answer = [array[0], 0];
  for (let i = 1; i < array.length; i++) {
    if (Math.max(array[i], array[i - 1]) == array[i]) {
      answer = [array[i], i];
    }
  }
  return answer;
};
